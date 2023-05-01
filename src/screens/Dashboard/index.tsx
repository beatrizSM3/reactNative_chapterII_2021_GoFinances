
import { HighLightCard } from '../../components/HighLightCard'
import { TransactionCard } from '../../components/TransactionCard'
import { Container, Header, UserInfo, Photo, UserGreeting, UserName, User, UserWrapper, Icon, HighlightCards, LogoutButton, Transactions, Title, TransactionList, LoadContainer } from './styles'
import { ActivityIndicator } from 'react-native'

import { TransactionCardProps } from '../../components/TransactionCard'
import { useCallback, useEffect, useState } from 'react'
import { getData } from '../../asyncStorage/getData'
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

export interface TransactionProps extends TransactionCardProps {
    id: string;

}

interface HighLightProps {
    total: string;
    lastTransaction: string;
}

interface HighLightDataProps {
    entries: HighLightProps;
    expensive: HighLightProps;
    total: HighLightProps;


}

export function Dashboard() {

    const [isLoading, setIsLoading] = useState(true)
    const [transactionsData, setTransactionsData] = useState<TransactionProps[]>([])
    const [highLightData, setHighLightData] = useState<HighLightDataProps>({} as HighLightDataProps)

    let entriesTotal = 0
    let expensiveTotal = 0


    async function loadTransactions() {


        try {
            const response = await getData()


            




            const transactionsFormatted: TransactionProps[] = response.map((item: TransactionProps) => {
                const amount = Number(item.amount).toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })
                const date = format(new Date(item.date), 'dd/MM/yyyy')


                if (item.type === 'positive') {
                    entriesTotal += Number(item.amount)
                } else {
                    expensiveTotal += Number(item.amount)
                }


                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    category: item.category,
                    date
                }

            })


            // console.log(transactionsFormatted, 'formatação')

            const lastTransactionEntries = new Date(Math.max.apply(Math, response
                .filter((item: TransactionProps) => item.type === 'positive')
                .map((item: TransactionProps) => new Date(item.date).getTime()))).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })

            const lastTransactionExpensive = new Date(Math.max.apply(Math, response
                .filter((item: TransactionProps) => item.type === 'negative')
                .map((item: TransactionProps) => new Date(item.date).getTime()))).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })

            const totalInterval = `01 a ${lastTransactionExpensive}`

            console.log(lastTransactionEntries, 'total interval')

           

            


            setTransactionsData(transactionsFormatted)
            setHighLightData({
                entries: { 
                    total: entriesTotal.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' }),
                    lastTransaction: `última entrada dia ${lastTransactionEntries}`
                
                },
                expensive: { 
                    total: expensiveTotal.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' }), 
                    lastTransaction: `última daída dia ${lastTransactionExpensive}`
                },
                total: { 
                    total: (entriesTotal - expensiveTotal).toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' }),
                    lastTransaction: totalInterval
                }
            })
            setIsLoading(false)
            entriesTotal = 0
            expensiveTotal = 0



        }

        catch (error) {
            console.log(error, 'erro no loadtransaction')
        }

    }


    useEffect(() => {
        loadTransactions()

    }, []) //ver aqui pois n está redezendo a lista de transações em tempo real quando adiciona uma nova transação

    useFocusEffect(useCallback(() => {

        loadTransactions()

    }, []))

    return (
        <Container>

            {isLoading ? <LoadContainer><ActivityIndicator size="large" /></LoadContainer> :
                <>
                    <Header>
                        <UserWrapper>
                            <UserInfo>
                                <Photo source={{ uri: 'https://github.com/NitroCaffeine.png' }} />
                                <User>
                                    <UserGreeting>Olá,</UserGreeting>
                                    <UserName>Beatriz</UserName>
                                </User>
                            </UserInfo>

                            <LogoutButton>
                                <Icon />
                            </LogoutButton>

                        </UserWrapper>

                    </Header>

                    <HighlightCards>
                        <HighLightCard title='Entrada' amount={highLightData.entries.total} lastTransaction={highLightData.entries.lastTransaction} type='up' />
                        <HighLightCard title='Saída' amount={highLightData.expensive.total} lastTransaction={highLightData.expensive.lastTransaction} type='down' />
                        <HighLightCard title='Total' amount={highLightData.total.total} lastTransaction={highLightData.total.lastTransaction} type='total' />


                    </HighlightCards>

                    <Transactions>
                        <Title>Listagem</Title>


                        <TransactionList
                            data={transactionsData}
                            keyExtractor={(item: any) => item.id}
                            renderItem={({ item }) => <TransactionCard data={item as TransactionProps} />}

                        />


                    </Transactions>
                </>
            }
        </Container>
    )
}
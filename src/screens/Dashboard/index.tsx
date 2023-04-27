
import { HighLightCard } from '../../components/HighLightCard'
import { TransactionCard } from '../../components/TransactionCard'
import { Container, Header, UserInfo, Photo, UserGreeting, UserName, User, UserWrapper, Icon, HighlightCards, LogoutButton, Transactions, Title, TransactionList } from './styles'


import { TransactionCardProps } from '../../components/TransactionCard'
import { useEffect, useState } from 'react'
import { getData } from '../../asyncStorage/getData'
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage'

export  interface TransactionProps extends TransactionCardProps  {
    id: string;
   
 }

export function Dashboard() {

   const [transactionsData, setTransactionsData] = useState<TransactionProps[]>([])


   async function loadTransactions() {


        try {
            const response = await  getData()
         
            
            console.log(response, 'response')
           
          

                
            const transactionsFormatted: TransactionProps[]= response.map((item: TransactionProps) => {
                const amount = Number(item.amount).toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})
                const date = format(new Date(item.date), 'dd/MM/yyyy')
                


            
                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    category: item.category ,
                    date
                }
                
            })


            console.log(transactionsFormatted, 'formatação')
            setTransactionsData(transactionsFormatted)
        


        } catch (error) {
            console.log(error, 'erro no loadtransaction')
        }

   }


   useEffect(() => {
         loadTransactions()

   },[]) //ver aqui pois n está redezendo a lista de transações em tempo real quando adiciona uma nova transação

    return(
       <Container>
        <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo source={{uri: 'https://github.com/NitroCaffeine.png'}}/>
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Beatriz</UserName>
                    </User>
                </UserInfo>

            <LogoutButton>
                <Icon/>
            </LogoutButton>

            </UserWrapper>
            
        </Header>

        <HighlightCards>
            <HighLightCard title='Entrada' amount='17.600,00' lastTransaction='ùltima transação dia 13 de abril' type='up'/>
            <HighLightCard title='Saída' amount='17.600,00' lastTransaction='ùltima transação dia 13 de abril' type='down'/>
            <HighLightCard title='Total' amount='17.600,00' lastTransaction='ùltima transação dia 13 de abril' type='total'/>


        </HighlightCards>

        <Transactions>
            <Title>Listagem</Title>


            <TransactionList
                data={transactionsData}
                keyExtractor={ (item: any) => item.id }
                renderItem={({item}) => <TransactionCard data={item as TransactionProps}/>}
               
            />

         
        </Transactions>
       
       </Container>
    )
}
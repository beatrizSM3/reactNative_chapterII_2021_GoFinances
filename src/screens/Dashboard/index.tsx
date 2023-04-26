
import { HighLightCard } from '../../components/HighLightCard'
import { TransactionCard } from '../../components/TransactionCard'
import { Container, Header, UserInfo, Photo, UserGreeting, UserName, User, UserWrapper, Icon, HighlightCards, LogoutButton, Transactions, Title, TransactionList } from './styles'
import { TouchableOpacity } from 'react-native'

import { TransactionCardProps } from '../../components/TransactionCard'

export  interface TransactionProps extends TransactionCardProps  {
    id: string;
 }

export function Dashboard() {

    const TransactionsData: TransactionProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: '13/04/2022'
        },
        {
            id: '2',
            type: 'negative',
            title: 'Hamburgueria Pizzy',
            amount: 'R$ 59,00',
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: '10/04/2022'
            
        },
        {
            id: '3',
            type: 'negative',
            title: 'Aluguel do apartamento',
            amount: 'R$ 1.200,00',
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: '10/04/2022'
        }
    ]

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
                data={TransactionsData}
                keyExtractor={ (item) => item as TransactionProps['id'] }
                renderItem={({item}) => <TransactionCard data={item as TransactionProps}/>}
               
            />

         
        </Transactions>
       
       </Container>
    )
}

import { HighLightCard } from '../../components/HighLightCard'
import { Container, Header, UserInfo, Photo, UserGreeting, UserName, User, UserWrapper, Icon, HighlightCards, LogoutButton } from './styles'
import { TouchableOpacity } from 'react-native'

export function Dashboard() {

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
       
       </Container>
    )
}
import { AntDesign } from '@expo/vector-icons';
import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};

`


export const Header = styled.View`

    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    /* align-items: center; */
    align-items: flex-start;
    flex-direction: row;
    padding: 0  32px;
    padding-top: ${RFValue(28)}px;
`

export const UserInfo = styled.View`

    flex-direction: row;
    align-items: center;


`
export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`
export const UserGreeting = styled.Text`

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

`
export const UserName = styled.Text`

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};

`
export const User = styled.View`
    margin-left: 17px;

`

export const UserWrapper = styled.View`

    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 24px;
    
   
    /* padding: 0 24px; */

`

export const Icon = styled(AntDesign).attrs({
    name: "poweroff",
    size: RFValue(24),
})`

    color: ${({ theme }) => theme.colors.attention};
`

export const LogoutButton = styled.TouchableOpacity`

    
`


export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { marginHorizontal: 24 }
  })`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
  `;


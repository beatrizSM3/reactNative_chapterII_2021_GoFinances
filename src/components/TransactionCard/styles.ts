import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";



interface AmountStyleProps {
    type: 'positive' | 'negative';
}

export const Container = styled.View`

    background-color: ${({theme}) => theme.colors.shape};
    padding: 17px 24px;
    border-radius: 5px;
    margin-bottom: 16px;
`

export const Title = styled.Text`

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`
export const Amount = styled.Text<AmountStyleProps>`

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    color: ${({theme, type}) => type === 'positive' ? theme.colors.success : theme.colors.attention};
`
export const Footer = styled.View`

    justify-content: space-between;
    flex-direction: row;
    margin-top: ${RFValue(26)}px;
    align-items: center;
`

export const Category = styled.View`


    flex-direction: row;
    align-items: center;
`

export const Icon = styled(Feather)`

    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`

export const CategoryName = styled.Text`

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    
`

export const Date = styled.Text`

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    

`
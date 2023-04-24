import styled, { css } from "styled-components/native"
import {Feather} from "@expo/vector-icons"

import { RFValue } from "react-native-responsive-fontsize"

type IconProps = {
    type: 'up' | 'down'
}

type TransactionTypeStyleProps = {
    isActive: boolean
    type: IconProps['type']

}

export const Container = styled.TouchableOpacity<TransactionTypeStyleProps>`

    flex-direction: row;
    flex: 1;
   
    border-width: ${({isActive}) => isActive ? 0 : 1}px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.text};
    /* border: 1px solid ${({theme, isActive}) => isActive ? theme.colors.shape : theme.colors.text}; */
    align-items: center;
    justify-content: center;
    padding: 18px 38px;
    border-radius: 5px;
    ${({isActive, type})=> isActive && type ==='down' && css`

        background-color: ${({theme}) => theme.colors.attention_light};
    `};

    ${({isActive, type})=> isActive && type ==='up' && css`
    
        background-color: ${({theme}) => theme.colors.success_light};
    `}
`


export const Icon = styled(Feather)<IconProps>`

    font-size: ${RFValue(20)}px;
    color: ${({theme, type}) => type === 'up'?  theme.colors.success : theme.colors.attention};
    margin-right: 14px;
`
export const Title = styled.Text`
    
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_dark};
`
import styled from "styled-components/native";
import { Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import {TouchableOpacity} from 'react-native'


export const Container = styled(TouchableOpacity).attrs({
    
    
})`

    /* flex: 1; */
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    align-items: center;
    padding: 16px 18px;

`
export const Title = styled.Text`

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text_dark};
`

export const Icon = styled(Feather)`

    font-size: ${RFValue(20)}px;
`
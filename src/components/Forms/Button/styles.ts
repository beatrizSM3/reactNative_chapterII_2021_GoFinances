import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`

    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-self: flex-end;
    padding: 18px;
    border-radius: 5px;
    align-self: flex-end;
`

export const Title = styled.Text`

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    text-align: center;
    
`

export const Icon = styled.Image``
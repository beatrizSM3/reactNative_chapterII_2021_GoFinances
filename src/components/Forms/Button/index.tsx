import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";


type ButtonProps = TouchableOpacityProps & {
    title: string;
    icon?: string;
}

export function Button({ title, ...rest}: ButtonProps) {
    return(
        <Container {...rest}>
            <Title>{title}</Title>
            

           
        </Container>
    )
}
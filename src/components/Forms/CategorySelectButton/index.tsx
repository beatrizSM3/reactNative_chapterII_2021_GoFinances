import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface CategorySelectProps extends TouchableOpacityProps {
    title: string;
}

export function CategorySelectButton({ title, ...rest }: CategorySelectProps) {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
            <Icon name="chevron-down"></Icon>
        {/* <select>
            <option value="food">Food</option>
        </select> */}
        </Container>
    );
}
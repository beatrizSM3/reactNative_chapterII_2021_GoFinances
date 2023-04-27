import { categories } from "../../utils/category";
import { Amount, Category, CategoryName, Container, Footer, Icon, Title, Date } from "./styles";


export interface TransactionCardProps {
    type: 'positive' | 'negative' ;
    name: string;
    amount: string;
    category: string;
    date: string ;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({data}: Props) {

    const {category, name, type, date, amount} = data;

    const categoryInfo = categories.filter(item => item.key === category)[0];

    return(
        <Container>
                <Title>{name}</Title>
                <Amount type={type}>{
                type === 'negative' ? '- ' : ''}{amount}</Amount>
                <Footer>

                    <Category>
                        <Icon name={categoryInfo.icon}/>
                        <CategoryName> {categoryInfo.name} </CategoryName>
                    </Category>
                    <Date>{date}</Date>
                </Footer>

        </Container>
    )

}
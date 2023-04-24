import { Amount, Category, CategoryName, Container, Footer, Icon, Title, Date } from "./styles";


type CategoryProps = {
    name: string;
    icon: string;
}
export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
}

interface Props {
    data: TransactionCardProps;
}

export function TransactionCard({data}: Props) {

    const {category, title, type, date, amount} = data;

    return(
        <Container>
                <Title>{title}</Title>
                <Amount type={type}>{
                type === 'negative' ? '- ' : ''}{amount}</Amount>
                <Footer>

                    <Category>
                        <Icon name={category.icon}/>
                        <CategoryName> {category.name} </CategoryName>
                    </Category>
                    <Date>{date}</Date>
                </Footer>

        </Container>
    )

}
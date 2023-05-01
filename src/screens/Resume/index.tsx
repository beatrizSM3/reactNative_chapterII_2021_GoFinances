import { HistoryCard } from '../../components/HistoryCard';
import { CategoriesContainer, Container, Header, Title } from './styles';
import { categories } from '../../utils/category';

export function Resume() {  

    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>
        
        <CategoriesContainer>
            {  categories.map((category)=>
                <HistoryCard color={category.color} title={category.name} amount="R$ 150,50" key={category.key}/>
            
            )             }
        </CategoriesContainer>
        </Container>
    );
}
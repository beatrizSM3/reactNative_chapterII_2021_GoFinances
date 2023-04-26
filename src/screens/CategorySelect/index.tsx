import { FlatList } from 'react-native';
import {Container, Header, Title, Category, Icon, Name, Separator, Footer} from './styles';
import { categories } from '../../utils/category';
import { Button } from '../../components/Forms/Button';


export interface Category {
    key: string;
    name: string;
}

interface CategorySelectProps {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
    
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory,
   
}: CategorySelectProps) {


    function handleCategorySelect(category: Category) {
        setCategory(category);
    }

   



    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{flex: 1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                    <Category
                    onPress={() => setCategory(item)}
                    isActive={category.key === item.key}
                    >

                        <Icon name={item.icon} />
                         <Name>{item.name}</Name>
                         
                    </Category>

                )}

                ItemSeparatorComponent={() => <Separator />}
            
            
            />

            <Footer>
                <Button title='Selecionar' onPress={closeSelectCategory}/>
            </Footer>
        </Container>
    );

}
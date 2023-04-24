import { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { InputForm } from "../../components/Forms/InputForm";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { Container, Header, Title, Form, Fields, TransactionTypeFields } from "./styles";
// import { Category } from "../../components/TransactionCard/styles";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Modal, TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { CategorySelect } from "../CategorySelect";
import { useForm} from "react-hook-form";
import { AlertComponent } from "../../components/Alert";

type FormData = { // devem ser os msm nomes dos names nos inputs
    name: string;
    amount: string;
}

export function Register() {

    const {control, handleSubmit} = useForm<FormData | any>();
    const [isActiveTransactionType, setIsActiveTransactionType] = useState('');


    const [showCategorySelectModal, setShowCategorySelectModal] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        
    });

    const onSubmit = (data: FormData) => console.log(data);


    function handleTransactionTypeSelect(type: 'income' | 'outcome') {
        setIsActiveTransactionType(type);
    }

    function handleOpenCategorySelectModal() {
        setShowCategorySelectModal(true);
    }

    function handleCloseCategorySelectModal() {
        setShowCategorySelectModal(false);
      
        
    }

    function handleRegister(form: FormData) {

        if(!isActiveTransactionType)
            return AlertComponent({title: "", message: "Selecione o tipo da transação"});

        if(category.key === 'category') {
            return AlertComponent({title: "", message: "Selecione a categoria"});
        }

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType: isActiveTransactionType,
            category: category.key,
        }

        console.log(data);


    }


   


        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                    <Container>
                        <Header>
                        <Title>Cadastro</Title>
                        </Header>

                        <Form>
                        <Fields>
                            <InputForm
                            name="name"
                            placeholder="Nome"
                            control={control}
                            autoCapitalize="sentences"
                            />
                            <InputForm
                            name="amount"
                            control={control}
                            placeholder="Preço"
                            keyboardType="decimal-pad"
                            />
                            <TransactionTypeFields>
                            <TransactionTypeButton
                                isActive={isActiveTransactionType === "income"}
                                title="Entrada"
                                type="up"
                                onPress={() => handleTransactionTypeSelect("income")}
                            />
                            <TransactionTypeButton
                                isActive={isActiveTransactionType === "outcome"}
                                title="Saída"
                                type="down"
                                onPress={() => handleTransactionTypeSelect("outcome")}
                            />
                            </TransactionTypeFields>
                            <CategorySelectButton
                            title={category.name}
                            onPress={handleOpenCategorySelectModal}
                            />
                        </Fields>
                        <Button
                            title="Enviar"
                            onPress={handleSubmit(handleRegister)}
                        />
                        </Form>
                        <Modal visible={showCategorySelectModal}>
                        <TouchableWithoutFeedback onPress={handleCloseCategorySelectModal}>
                            <View style={{ flex: 1 }}>
                            <CategorySelect
                                category={category}
                                setCategory={setCategory}
                                closeSelectCategory={handleCloseCategorySelectModal}
                            />
                            </View>
                        </TouchableWithoutFeedback>
                        </Modal>
                    </Container>
                    </View>
  </TouchableWithoutFeedback>
        )
}
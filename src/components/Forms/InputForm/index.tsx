import { Input } from "../Input";
import { Controller, Control } from "react-hook-form";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

interface InputFormProps extends TextInputProps{

    control: Control;
    name: string;
    
}

export function InputForm({
    control,
    name,
    ...rest

}: InputFormProps){

    return(
        <Container>
            <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (           
                <Input 
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                {...rest}
                />
            )}
            name={name}
            />
           
        </Container>
    )
}
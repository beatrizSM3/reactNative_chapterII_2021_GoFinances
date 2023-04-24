import { Alert } from "react-native";

interface AlertProps {
    title: string;
    message: string;
  
  

}

export function AlertComponent({title, message}: AlertProps) {
    return Alert.alert(title, message, [{ text: 'OK', onPress: () => console.log("OK Pressed") }]);

}
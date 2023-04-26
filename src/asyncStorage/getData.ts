import AsyncStorage from "@react-native-async-storage/async-storage";
import { AlertComponent } from "../components/Alert";

export async function getData(){

    try {
        const jsonValue = await AsyncStorage.getItem('@gofinances:transactions')
        
        return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch(e) {
        console.log(e)
        AlertComponent({ title: "", message: "Não foi possível carregar os dados" });
    }

}
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AlertComponent } from "../components/Alert";
// import { TransactionProps } from "../screens/Dashboard";


export async function getData() {

    try {
        const jsonValue = await AsyncStorage.getItem('@gofinances:transactions')

       
        const transactions = jsonValue? JSON.parse(jsonValue) : [];
        

       
        return transactions;

    } catch(e) {
        console.log(e)
        AlertComponent({ title: "", message: "Não foi possível carregar os dados" });
        
    }

}
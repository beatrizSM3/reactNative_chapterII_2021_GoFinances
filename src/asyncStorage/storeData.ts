import AsyncStorage from '@react-native-async-storage/async-storage';
import { TransactionProps } from '../screens/Dashboard';
import { AlertComponent } from '../components/Alert';

type Transactions = {

    id: string,
    name: string,
    amount: string,
    transactionType: string,
    category: string,
    date: Date
}

export async function storeData(value: Transactions) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@gofinances:transactions', jsonValue)
    } catch (e) {
        console.log(e)
        AlertComponent({ title: "", message: "Não foi possível salvar os dados" });
    }


}
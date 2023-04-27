import AsyncStorage from '@react-native-async-storage/async-storage';
import { TransactionProps } from '../screens/Dashboard';
import { AlertComponent } from '../components/Alert';
import { getData } from './getData';

type StorageProps = {
    id:string,
    name: string,
    amount: string,
    type: string,
    category: string,
    date: Date
}

export async function storeData(value: StorageProps) {
    try {
      
        const storedData = await AsyncStorage.getItem('@gofinances:transactions')
        const currentData = storedData ? JSON.parse(storedData) : []
        const data = [...currentData, value]

        const jsonValue = JSON.stringify(data)



        await AsyncStorage.setItem('@gofinances:transactions', jsonValue)
    } catch (e) {
        console.log(e)
        AlertComponent({ title: "", message: "Não foi possível salvar os dados" });
    }


}
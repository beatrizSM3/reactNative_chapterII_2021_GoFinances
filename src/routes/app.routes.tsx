import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Register } from "../screens/Register";
import { Dashboard } from "../screens/Dashboard";
import { useTheme } from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'; 
import {Platform} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Resume } from "../screens/Resume";


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const {colors} = useTheme();

    return (
        <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: RFPercentage(10),
            }
        }}
        >
            <Screen name="Listagem" component={Dashboard} options={{tabBarIcon: (({size, color}) => (
                <MaterialIcons 
                name="format-list-bulleted"
                size={RFValue(size)}
                color={color}
                />
            )) }}/>
            <Screen name="Cadastro" component={Register} options={{tabBarIcon: (({size, color}) => (
                <MaterialIcons    //size e color pegam do tabBarActiveTintColor e tabBarInactiveTintColor
                name="attach-money"
                size={RFValue(size)}
                color={color}
                />
            )) }} />
            <Screen name="Resumo" component={Resume} options={{tabBarIcon: (({size, color}) => (
                <MaterialIcons 
                name="pie-chart"
                size={RFValue(size)}
                color={color}
                />
            )) }} />
        </Navigator>
    )
}
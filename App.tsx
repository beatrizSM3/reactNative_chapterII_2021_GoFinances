import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components';
import { NavigationContainer} from "@react-navigation/native"
import theme from './src/global/styles/theme';
import React from 'react';
import {
useFonts, 
Poppins_400Regular,
Poppins_500Medium,
Poppins_700Bold
} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {


  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_700Bold});

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <AppRoutes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}


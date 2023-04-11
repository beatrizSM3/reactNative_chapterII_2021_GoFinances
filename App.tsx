import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import React from 'react';
import {
useFonts, 
Poppins_400Regular,
Poppins_500Medium,
Poppins_700Bold
} from '@expo-google-fonts/poppins'

import AppLoading from 'expo-app-loading';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {


  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_700Bold});

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <ThemeProvider theme={theme} >
      <Dashboard/>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


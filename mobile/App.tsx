import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_600SemiBold, Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold, Poppins_400Regular,
    Archivo_400Regular, Archivo_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}



import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import PageIMC from './pages/PageIMC';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform, TextInput, } from 'react-native';
import Field from './components/Field';
import ButtonPrimary from './components/ButtonPrimary';


export default function App() {
  const [peso, setPeso] = useState(null)
  const [altura, setAltura] = useState(null)
  const [imc,setIMC] = useState(0)

  const onPress = () => {
    if (peso != '' && altura != ''){
      setIMC(parseFloat((parseFloat(peso)/parseFloat(altura)).toFixed(2)))
    }
    console.log(imc)
    console.log(altura)
    console.log(peso)
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <PageIMC/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
}});

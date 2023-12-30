import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styles from './styles';
import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput,} from 'react-native';
import Field from '../../components/Field';
import ButtonPrimary from '../../components/ButtonPrimary';

function PageIMC() {
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
    <>
      <View style={styles.header}>
        <Text style={styles.header.titulo}>HEALTH</Text>
        <Text style={styles.header.texto}>APP</Text>
      </View>
      <StatusBar style="auto"/>
      <View style={styles.content}>
        <Field title={'Peso:'} mode='numeric' onChange={setPeso} value={peso}/>
        <Field title={'Altura:'} mode='numeric' onChange={setAltura} value={altura}/>
        <ButtonPrimary title={'CALCULAR'} onPress={onPress}/>
      </View>
      <View style={styles.container}>
      {(imc != 0 ) ? (<Text style={styles.result}>{imc}</Text>) : (<Text>Informe seu peso e altura</Text>)}
      </View>
    </>
  );
}

export default PageIMC;
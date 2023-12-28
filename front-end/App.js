import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default function App() {

  const [value,setValue] = useState(0)
  const onPress = () => {
    setValue(value+1)
  }

  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <StatusBar style="auto" />
      <Button
      onPress={onPress}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

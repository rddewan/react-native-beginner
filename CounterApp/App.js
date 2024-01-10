import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter,setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    setCounter(counter - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
      <View style={{ height: 8 }} />
      <Button title="Increment" onPress={() => Increment()}/>
      <View style={{ height: 8 }} />
      <Button title="Decrement" onPress={() => Decrement()}/>
      <StatusBar style="auto" />
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
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

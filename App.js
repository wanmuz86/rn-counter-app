import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // Creating a variable counter, method setcounter, initialize to 0
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,margin:15}}>{counter}</Text>
      <Text>{message}</Text>

      <Button title="Increment" color="green" onPress={() => {
        setCounter(counter + 1);
        setMessage('');

      }} />
      <Button title="Decrement" color="blue" onPress={() => {
        if (counter > 0) {
          setCounter(counter - 1)
        }
        else {
          setMessage('Number cannot be less than 0');
        }

      }} />
      <Button title="Reset" color="red" onPress={() => {
        setCounter(0)
        setMessage('');
      }
      } />
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
});

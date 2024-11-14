import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <SafeAreaView>
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })


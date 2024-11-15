import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StatusBar } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import JobList from './app/screens/JobListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* <Stack.Screen name="JobList" component={JobList} /> */}
        {/* <Stack.Screen name="ViewImage" component={ViewImageScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { StatusBar } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import JobList from './app/screens/JobListScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" hidden />
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
      {/* <JobList /> */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
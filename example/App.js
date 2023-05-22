import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WheelPickerDemo from './src/page/WheelPicker/index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ height: 50 }} />
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{ height: 50 }} />
      <WheelPickerDemo />
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

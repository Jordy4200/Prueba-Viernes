import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Primerejercicio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxBlue}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 7,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  boxOrange: {
    flex: 1,
    width: 100,
    height: 650,
    backgroundColor: 'orange',
    borderWidth: 7,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  boxBlue: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 7,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

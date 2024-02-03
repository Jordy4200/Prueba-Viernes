import React from 'react'
import { StyleSheet, View } from 'react-native';

export const SextoEjercicio = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxGreen}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxBlue}></View>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems:'center',
      position:'relative'
    },
    boxGreen: {
        flex:1,
        width:'100%',
        backgroundColor: 'green',
        borderColor:'white',
        borderWidth: 7,
      },
      boxOrange: {
        flex:1,
        width:'100%',
        backgroundColor: 'orange',
        borderWidth: 7,
        borderColor:'white',
      },
      boxBlue: {
        flex:3,
        width:'100%',
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor:'white',
      },
});


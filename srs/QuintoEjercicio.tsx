import React from 'react'
import { StyleSheet, View } from 'react-native'

export const QuintoEjercicio = () => {
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
      flexDirection:'row',
      backgroundColor: 'red',
      justifyContent:'space-between'
    },
    boxGreen: {
        width:100,
        backgroundColor: 'green',
        borderColor:'white',
        borderWidth: 7,
        
      },
      boxOrange: {
        width:100,
        backgroundColor: 'orange',
        borderWidth: 7,
        borderColor:'white',
        
      },
      boxBlue: {
        width:100,
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor:'white',
        
      },
});

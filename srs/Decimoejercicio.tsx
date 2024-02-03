import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Decimoejercicio = () => {
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
          position:'relative',
          justifyContent:'center',
          alignItems:'center'
        },
        boxGreen: {
            width:100,
            height:100,
            backgroundColor: 'green',
            borderColor:'white',
            borderWidth: 7,
          },
          boxOrange: {
            width:100,
            height:100,
            backgroundColor: 'orange',
            borderWidth: 7,
            borderColor:'white',
          },
          boxBlue: {
            width:100,
            height:100,
            backgroundColor: 'blue',
            borderWidth: 7,
            borderColor:'white',
          },
    });

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the Weather</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fdf6aa',
      padding: 20,
      paddingHorizontal:30,
      paddingVertical:100,
      justifyContent: 'flex-end',
    },
    text: {
      color:"#2c2c2c",
      fontSize:35,
    },
    yellowView:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'yellow',
    },
    blueView:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'blue',
    }
  });
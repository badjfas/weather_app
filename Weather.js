import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient } from "expo-linear-gradient";

export default function Weather({temp,temp_max,temp_min,name,condition}){
    const weatherOptions = {
        Haze: {
            iconName:"weather-hail",
            color:["#304352", "#d7d2cc"]
        },
        Clear:{
            iconName:"weather-sunny",
            color:["#FEAC5E", "#d7d2cc"]
        },
        Rain:{
            iconName:"weather-pouring",
            color:["#6441A5","#2a0845"]
        },
        Snow:{
            iconName:"weather-snowy"
        },
        Clouds:{
            iconName:"weather-cloudy"
        },
        Dust:{
            iconName:"weather-sunset"
        }
    };

    return (
            <LinearGradient colors={weatherOptions[condition].color} style={styles.container}>
           
            <StatusBar barStyle="light-content"/> 

            <View style={styles.harfContainer}>
            <MaterialCommunityIcons color="white" size={100} name={weatherOptions[condition].iconName}/>        
            <Text style={styles.text}>
             {temp}º</Text>
            </View>

            <View style={styles.harfContainer}>
              <Text style={styles.text}>날씨 : {condition}</Text>
              <Text style={styles.text}>최저 기온 : {temp_min}º</Text>
            <Text style={styles.text}>최고 기온 : {temp_max}º</Text>
            </View>

            </LinearGradient>
    
        
    )
}

Weather.protoTypes= {
    /*
    main:PropTypes.arrayOf(PropTypes.string).isRequired,
    name:PropTypes.string.isRequired,
    weather:PropTypes.arrayOf(PropTypes.string).isRequired
    */
   temp:PropTypes.number.isRequired,
   temp_max:PropTypes.number.isRequired,
   temp_min:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm",
                                "Drizzle",
                                "Rain",
                                "Snow",
                                "Atmosphere",
                                "Clear",
                                "Clouds",
                                "Dust"]).isRequired
    
}

const styles = StyleSheet.create({
    container: {
     padding: 15, 
     borderRadius: 6 ,
     flex: 1,
     alignItems:"center",
     justifyContent: 'center',
    },
    text: {
      color:"white",
      fontSize:32,
    },
    harfContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp:{
        fontSize:32,
    }
  });
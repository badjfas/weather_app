import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient } from "expo-linear-gradient";
import Hr from "react-native-hr-component";

export default function Weather({temp,temp_max,temp_min,name,condition,pm10,pm25}){
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
            iconName:"weather-snowy",
            color:["#6441A5","#2a0845"]
        },
        Clouds:{
            iconName:"weather-cloudy",
            color:["#6441A5","#2a0845"]
        },
        Dust:{
            iconName:"weather-sunset",
            color:["#6441A5","#2a0845"]
        }
    };
    const dustOptions={
        dustOp: (pm10) => {
            if(pm10>=0 && pm10<=15)
            {
              return ("emoticon-excited");
            }else if(pm10 >= 31 && pm10<=80)
            {
                return ("emoticon-neutral");
            }else
            {
                return "emoticon-devil";
            }
        }
    };

    return (
            <LinearGradient colors={weatherOptions[condition].color} style={styles.container}>
           
            <StatusBar barStyle="light-content"/> 

            <View style={styles.harfContainer}>
            <MaterialCommunityIcons color="white" size={100} name={weatherOptions[condition].iconName}/>        
            <Text style={styles.text}>{temp}º</Text>
            </View>
            <Hr style={styles.liner} thickness={3}/>
            <View style={styles.harfContainer2}>
            <MaterialCommunityIcons color="white" size={100} name={dustOptions.dustOp(pm10)}/>        
            <Text style={styles.text}>미세먼지 : {pm10}</Text>
            </View>

            {console.log(dustOptions.dustOp(pm10))}
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
                                "Dust"]).isRequired,
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
    harfContainer2: {
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp:{
        fontSize:32,
    },
    liner:{
        flex:0.1,
        alignItems:"center",
        backgroundColor:"white",
        justifyContent:"center",
    }
  });
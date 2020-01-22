import React from 'react';
import PropTypes from 'prop-types';
import {StatusBar, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient } from "expo-linear-gradient";
import Hr from "react-native-hr-component";

export default function Weather({temp,temp_max,temp_min,name,condition,pm10,pm25}){
    const weatherOptions = {
        Thunderstorm: {
            iconName: "weather-lightning",
            gradient: ["#373B44", "#4286f4"],
            title: "Thunderstorm",
            subtitle: "Actually, outside of the house"
          },
          Drizzle: {
            iconName: "weather-hail",
            gradient: ["#89F7FE", "#66A6FF"],
            title: "Drizzle",
            subtitle: "Is like rain, but gay 🏳️‍🌈"
          },
          Rain: {
            iconName: "weather-rainy",
            gradient: ["#00C6FB", "#005BEA"],
            title: "Raining",
            subtitle: "For more info look outside"
          },
          Snow: {
            iconName: "weather-snowy",
            gradient: ["#7DE2FC", "#B9B6E5"],
            title: "Cold",
            subtitle: "Do you want to build a snowman? Fuck no."
          },
          Atmosphere: {
            iconName: "weather-hail",
            gradient: ["#89F7FE", "#66A6FF"]
          },
          Clear: {
            iconName: "weather-sunny",
            gradient: ["#FF7300", "#FEF253"],
            title: "Sunny",
            subtitle: "Go get your ass burnt"
          },
          Clouds: {
            iconName: "weather-cloudy",
            gradient: ["#D7D2CC", "#304352"],
            title: "Clouds",
            subtitle: "I know, fucking boring"
          },
          Mist: {
            iconName: "weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title: "Mist",
            subtitle: "It's like you have no glasses on."
          },
          Dust: {
            iconName: "weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title: "Dusty",
            subtitle: "Thanks a lot China 🖕🏻"
          },
          Haze: {
            iconName: "weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title: "Haze",
            subtitle: "Just don't go outside."
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
        },
        dustMessage: (pm10) => {
            if(pm10>=0 && pm10<=15)
            {   
              return ("좋음");
            }else if(pm10 >= 31 && pm10<=80)
            {
                return ("보통");
            }else
            {
                return "나쁨";
            }
        }
    };

    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient} style={styles.container} >           
            <StatusBar barStyle="light-content"/> 

            <View style={styles.harfContainer}>
            <MaterialCommunityIcons color="white" size={100} name={weatherOptions[condition].iconName}/>        
            <Text style={styles.text}>{temp}º</Text>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>

            </View>
            <Hr style={styles.liner} thickness={3}/>
            <View style={styles.harfContainer2}>
            <MaterialCommunityIcons color="#6E6E6E" size={100} name={dustOptions.dustOp(pm10)}/>        
            <Text style={styles.textDust}> {dustOptions.dustMessage(pm10)}</Text>
            <Text style={styles.textDust}> {pm10}</Text>
            </View>

            {console.log(dustOptions.dustOp(pm10))}
            </LinearGradient>
    
        
    )
}

Weather.protoTypes= {
        temp: PropTypes.number.isRequired,
        condition: PropTypes.oneOf([
          "Thunderstorm",
          "Drizzle",
          "Rain",
          "Snow",
          "Atmosphere",
          "Clear",
          "Clouds",
          "Haze",
          "Mist",
          "Dust"
        ]).isRequired
      };

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
    textDust: {
        color:"#424242",
        fontSize:32,
      },
    harfContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    harfContainer2: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp:{
        fontSize:32,
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
      },
    liner:{
        flex:0.1,
        alignItems:"center",
        backgroundColor:"white",
        justifyContent:"center",
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
      },
      textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
      }
  });
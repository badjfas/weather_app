import React from 'react';
import Loading from './Loading';
import Weather from './Weather';

import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
const API_KEY="09d01a94e6942ca2d48a2648fc1349b0";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude,longitude) =>{
    const {data , weather} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      console.log(data);
      const tempInfo = data.main;
      this.setState({isLoading:false ,
         temp:tempInfo.temp , 
         temp_min:tempInfo.temp_min ,
         temp_max:tempInfo.temp_max ,
         name:data.name ,
         condition:data.weather[0].main})
    }
    getLocation = async() => {
    try {
      const permission = await Location.requestPermissionsAsync();
      console.log(permission);
      const {coords:{
        latitude,
        longitude
      }
      }= await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);

    } catch (error) {
      Alert.alert("I cant find you.... srrrrrry bro")
    }

  }

 componentDidMount(){
    this.getLocation(); 
  }

  render() {
    const {isLoading , temp , temp_max , temp_min , name,condition} = this.state;

  return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} 
  temp_max={Math.round(temp_max)} 
  temp_min={Math.round(temp_min)}
  name={name}
  condition={condition}/>; 
  }
}

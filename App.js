import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
const API_KEY="09d01a94e6942ca2d48a2648fc1349b0";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude,longitude) =>{
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      );
      console.log(data);
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

      this.setState({isLoading:false})
    } catch (error) {
      Alert.alert("I cant find you.... srrrrrry bro")
    }

  }

 componentDidMount(){
    this.getLocation(); 
  }

  render() {
    const {isLoading} = this.state;

  return isLoading ? <Loading/> : null; 
  }
}

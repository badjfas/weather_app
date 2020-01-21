import React from 'react';
import Loading from './Loading';
import Weather from './Weather';

import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
const API_KEY="09d01a94e6942ca2d48a2648fc1349b0";
const API_KEY2="OkoQk8Cqkp8TMr7mXKPyZrwAKHiXqzbNYZVXoJ6c2t5NMWztkyKvlx7cQDRl45hUhLDtQeJcC%2FrI4BpjGJ4lwg%3D%3D";
const API_KEY3="9d8d316766267433c88ef33d97cd71cf5d2179e1";

export default class extends React.Component {
  state = {
    isLoading : true,
  };
 
  getWeather = async(latitude,longitude) =>{
    const {data , weather} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
   const {data:{data:{iaqi:info}}} = await axios.get(`https://api.waqi.info/feed/geo:${latitude};${longitude}//?token=${API_KEY3}`)
   const {data:datas} = await axios.get(`https://api.waqi.info/feed/geo:${latitude};${longitude}//?token=${API_KEY3}`)
  
   const tempInfo = data.main;
      this.setState({isLoading:false ,
         temp:tempInfo.temp , 
         temp_min:tempInfo.temp_min ,
         temp_max:tempInfo.temp_max ,
         name:data.name ,
         condition:data.weather[0].main,
         pm10:info.pm10.v,
         pm25:info.pm25.v,
          },
         )
         console.log("pm10",info.pm10.v);
         console.log("pm2.5",info.pm25.v);

    }
    getLocation = async() => {
    try {
      const permission = await Location.requestPermissionsAsync();
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
    const {isLoading , temp , temp_max , temp_min , name,condition,pm10,pm25} = this.state;

  return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} 
  temp_max={Math.round(temp_max)} 
  temp_min={Math.round(temp_min)}
  name={name}
  condition={condition} pm10={pm10} pm25={pm25}/>; 
  }
}

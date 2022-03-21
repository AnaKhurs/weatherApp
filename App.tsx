import React from "react";
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from "react-native";
import axios from "axios"
import Weather from "./Weather";

const API_KEY = "91fc7be41068a0353d439e55a430d703"


export default class extends React.Component {

    state = {
        isLoading: true,
        temp: 0
    }

    getWeather = async (latitude: number, longitude: number) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        /*console.log(data)*/
        this.setState({isLoading: false, temp: data.main.temp})
    }

    getLocation = async () => {
        try {
            const response = await Location.requestForegroundPermissionsAsync()
            console.log(response)
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
            await this.getWeather(latitude, longitude)
        } catch (error) {
            Alert.alert('Hе могу определить местоположение', 'Очень грустно :(')
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        const {isLoading, temp} = this.state
        return (
            isLoading ? <Loading/> : <Weather temp={temp}/>
        )
    }
}

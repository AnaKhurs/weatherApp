import React from "react";
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from "react-native";


export default class extends React.Component {

    getLocation = async () => {
        try {
            const response = Location.requestPermissionsAsync()
            console.log(response)
            const location = await Location.getCurrentPositionAsync()
            console.log(location)
        } catch (error) {
            Alert.alert('Hе могу определить местоположение', 'Очень грустно :(')
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        return (
            <Loading/>
        )
    }
}

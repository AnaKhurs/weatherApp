import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm"
    },
    Drizzle: {
        iconName: "rainy"
    },
    Rain: {
        iconName: "rainy"
    },
    Snow: {
        iconName: "snow"
    },
    Mist: {
        iconName: "rainy"
    },
    Dust: {
        iconName: "rainy"
    },
    Smoke: {
        iconName: "rainy"
    },
    Haze: {
        iconName: "cloudy-night"
    },
    Fog: {
        iconName: "rainy"
    },
    Squall: {
        iconName: "rainy"
    },
    Clouds: {
        iconName: "cloud"
    },
}
type ConditionType =
    "Thunderstorm"
    | "Drizzle"
    | "Rain"
    | "Snow"
    | "Mist"
    | "Dust"
    | "Smoke"
    | "Haze"
    | "Fog"
    | "Squall"
    | "Clouds"

type IconNameType = "rainy" | "thunderstorm" | "cloud" | "cloudy-night"

export default function Weather({temp, condition}: { temp: number, condition: ConditionType }) {
    return (
        <LinearGradient style={styles.container}
                        colors={['#4c669f', '#3b5998', '#192f6a']}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName as IconNameType} size={96} color={"white"}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Dust", "Smoke", "Haze", "Fog", "Sand", "Ash", "Squall", "Tornado", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    }
});
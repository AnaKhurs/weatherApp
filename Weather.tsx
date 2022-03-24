import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm",
        gradient: ["#0f0c29", "#302b63"],
        title: "",
        subTitle: "",
    },
    Drizzle: {
        iconName: "rainy",
        gradient: ["#525252", "#3d72b4"],
        title: "",
        subTitle: "",
    },
    Rain: {
        iconName: "rainy",
        gradient: ["#4c669f", "#3b5998"],
        title: "",
        subTitle: "",
    },
    Snow: {
        iconName: "snow",
        gradient: ["#2d8bcb", "#93daf3"],
        title: "",
        subTitle: "",
    },
    Mist: {
        iconName: "rainy",
        gradient: ["#757F9A", "#D7DDE8"],
        title: "",
        subTitle: "",
    },
    Dust: {
        iconName: "rainy",
        gradient: ["#403B4A", "#E7E9BB"],
        title: "",
        subTitle: "",
    },
    Smoke: {
        iconName: "rainy",
        gradient: ["#C9D6FF", "#E2E2E2"],

    },
    Haze: {
        iconName: "cloudy-night",
        gradient: ["#16222a", "#3a6073"],
        title: "",
        subTitle: "",
    },
    Fog: {
        iconName: "rainy",
        gradient: ["#283048", "#859398"],
        title: "",
        subTitle: "",
    },
    Squall: {
        iconName: "rainy",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "",
        subTitle: "",
    },
    Clouds: {
        iconName: "cloud",
        gradient: ['#076585', '#fff'],
        title: "",
        subTitle: "",
    },
}


export type ConditionType =
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
                        colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName as IconNameType} size={96} color={"white"}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>Заголовок</Text>
                <Text style={styles.subTitle}>Подзаголовок</Text>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
});
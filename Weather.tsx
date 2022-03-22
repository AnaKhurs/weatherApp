import React from "react";
import {StyleSheet, Text, View} from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp, condition}: { temp: number, condition: string }) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
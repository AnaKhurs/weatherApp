import React from "react";
import propTypes from "prop-types"
import {StyleSheet, Text, View} from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp}: { temp: number }) {
    return (
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
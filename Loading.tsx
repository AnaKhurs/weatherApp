import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Получение погоды...</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2C2C2C",
        fontSize: 30,
    }
});

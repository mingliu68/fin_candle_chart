import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json';
import Header from '../components/Header';
import Values from '../components/Values';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const candles = data.slice(0, 20)
const caliber = screenWidth / candles.length

const Chart = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Header goBack={() => navigation.goBack()} />
                <Values {...{ candles, caliber }} />
            </View>
            <View style={{ height: screenHeight }} />
        </View>
    )
}

export default Chart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column",

    }
})
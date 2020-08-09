import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json';
import Header from '../components/Header';
import Values from '../components/Values';
import Content from '../components/Content';

// const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;
const { width: size } = Dimensions.get("window");
const candles = data.slice(0, 20)
const caliber = size / candles.length

const Chart = ({ route, navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style="light" />

                <Header goBack={() => navigation.goBack()} />
                <Values {...{ candles, caliber }} />
            </View>
            <View style={{ height: size }} />
            <Content />
        </ScrollView>
    )
}

export default Chart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",

    }
})
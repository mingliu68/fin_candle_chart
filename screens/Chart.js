import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json';
import Header from '../components/Header';
import Values from '../components/Values';
import Content from '../components/Content';
import Candle from '../components/Candle';

const { width: size } = Dimensions.get("window");
const candles = data.slice(0, 20)
const caliber = size / candles.length

const Chart = ({ route, navigation }) => {

    const [foundMinMax, setFoundMinMax] = useState(false)
    const [getMin, setGetMin] = useState(null)
    const [getMax, setGetMax] = useState(null)

    const getMinMax = useCallback(() => {
        let max = candles[0].high;
        let min = candles[0].low
        candles.forEach((item, index) => {
            max = max < item["high"] ? item["high"] : max;
            min = min > item["low"] ? item["low"] : min;
        })
        setGetMin(min);
        setGetMax(max);
        setFoundMinMax(true)
    })

    useEffect(() => {
        getMinMax();
    }, [])

    return (

        <View style={styles.container}>
            <View>
                <StatusBar style="light" />

                <Header goBack={() => navigation.goBack()} />
                <Values {...{ candles, caliber }} />
            </View>
            <View style={{ height: size, width: size, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                {
                    foundMinMax
                        ? candles.map((candle, index) => (
                            <Candle {...candle} key={index} size={size} max={getMax} min={getMin} />
                        ))
                        : <View styles={{ backgroundColor: "#eeeeee" }} />
                }
            </View>
            <Content />
        </View>
    )
}

export default Chart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    textLight: {
        color: "white"
    }
})
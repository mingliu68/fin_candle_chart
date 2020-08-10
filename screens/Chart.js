import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json';
import Header from '../components/Header';
import Values from '../components/Values';
import Content from '../components/Content';
import Candle from '../components/Candle';

// const screenWidth = Dimensions.get("window").width;
// const screenHeight = Dimensions.get("window").height;
const { width: size } = Dimensions.get("window");
const candles = data.slice(0, 20)
const caliber = size / candles.length

const Chart = ({ route, navigation }) => {
    const [max, setMax] = useState(candles[0].high)
    const [min, setMin] = useState(candles[0].low)
    const [foundMinMax, setFoundMinMax] = useState(false)

    const getMinMax = useCallback(() => {
        candles.map(candle => {
            candle.high > max ? setMax(candle.high) : null
            candle.low < min ? setMin(candle.low) : null
        })
        setFoundMinMax(true)
    })

    useEffect(() => {
        getMinMax();
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style="light" />

                <Header goBack={() => navigation.goBack()} />
                <Values {...{ candles, caliber }} />
            </View>
            <View style={{ height: size, flexDirection: 'row', justifyContent: 'space-around', }}>
                {
                    foundMinMax
                        ? candles.map((candle, index) => (
                            <Candle {...candle} key={index} size={size} max={max} min={min} />
                        ))
                        : null
                }
            </View>
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
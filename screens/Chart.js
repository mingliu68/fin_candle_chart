import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json';
import Header from '../components/Header';
import Values from '../components/Values';
import Content from '../components/Content';
import Candle from '../components/Candle';

const { width: size } = Dimensions.get("window");
let candles = data.slice(0, 20)
const caliber = size / candles.length

const formatValue = (value) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value);


const Chart = ({ route, navigation }) => {
    const [candleIndex, setCandleIndex] = useState();
    console.log("Candle Index initial MAIN(chart): " + candleIndex)
    const [foundMinMax, setFoundMinMax] = useState(false);
    const [getMin, setGetMin] = useState(null);
    const [getMax, setGetMax] = useState(null);

    const getMinMax = useCallback(() => {

        let max = candles[0].high;
        let min = candles[0].low
        candles.forEach((item, index) => {
            max = max < item["high"] ? item["high"] : max;
            min = min > item["low"] ? item["low"] : min;
            candles[index] = { ...item, formatHigh: formatValue(item.high), formatLow: formatValue(item.low), formatOpen: formatValue(item.open), formatClose: formatValue(item.close) }
        })
        setGetMin(min);
        setGetMax(max);
        setFoundMinMax(true)
    })

    const updateValues = ind => {
        setCandleIndex(ind)
    }

    useEffect(() => {
        getMinMax();
        setCandleIndex(0)
    }, [])



    return (

        <ScrollView style={styles.container}>
            <View>
                <StatusBar style="light" />

                <Header goBack={() => navigation.goBack()} />
                {
                    foundMinMax
                        ? <Values {...{ candles, caliber }} candleIndex={candleIndex} key={candleIndex} />
                        : <Text>Getting Values</Text>
                }

            </View>
            <View style={{ height: size, width: size, flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                {
                    foundMinMax
                        ? candles.map((candle, index) => (
                            <Candle {...candle} key={index} index={index} size={size} max={getMax} min={getMin} updateValues={updateValues} />
                        ))
                        : <View styles={{ backgroundColor: "#eeeeee" }} />
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
    },
    textLight: {
        color: "white"
    }
})
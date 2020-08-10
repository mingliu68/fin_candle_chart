import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Candle = ({ date, day, open, high, low, close, index, size, max, min }) => {
    const background = close >= open ? "green" : "red"
    // const unit = (size / (max - min)) * 100
    const topStyle = {
        backgroundColor: background,
        width: 2,
        // height: close >= open ? (Math.abs(high - close) / 100) * unit : (Math.abs(high - open) / 100) * unit
        height: close >= open ? (Math.abs(high - close) / (max - min)) * (size * 0.65) : (Math.abs(high - open) / (max - min)) * (size * 0.65)
    }
    const centerStyle = {
        backgroundColor: background,
        // height: (Math.abs(close - open) / 100) * unit,
        height: ((Math.abs(close - open)) / (max - min)) * (size * 0.65),
        width: "100%"
    }
    const bottomStyle = {
        backgroundColor: background,
        height: close >= open ? (Math.abs(open - low) / (max - min)) * (size * 0.65) : (Math.abs(close - low) / (max - min)) * (size * 0.65),
        width: 2
    }

    return (
        <View key={index} style={{ width: size / 30, alignItems: "center", marginTop: ((max - high) * (size * 0.65) / (max - min)) }}>
            <View style={topStyle} />
            <View style={centerStyle} />
            <View style={bottomStyle} />
        </View>
    )
}

export default Candle;

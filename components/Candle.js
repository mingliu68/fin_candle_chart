import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Candle = ({ date, day, open, high, low, close, index, size, max, min, updateValues }) => {
    const background =
        close >= open
            ? "green"
            : "red"

    const topStyle = {
        backgroundColor: background,
        width: 2,
        height:
            close >= open
                ? (Math.abs(high - close) / (max - min)) * size
                : (Math.abs(high - open) / (max - min)) * size,
    }

    const centerStyle = {
        backgroundColor: background,
        height: (Math.abs(close - open) / (max - min)) * size,
        width: "100%"
    }

    const bottomStyle = {
        backgroundColor: background,
        height:
            close >= open
                ? (Math.abs(open - low) / (max - min)) * size
                : (Math.abs(close - low) / (max - min)) * size,
        width: 2
    }

    return (
        <TouchableOpacity
            style={{
                width: size / 30,
                alignItems: "center",
                height: ((high - low) / (max - min)) * size,
                marginTop: ((max - high) / (max - min)) * size,
            }}
            onPress={() => updateValues(index)}
        >
            <>
                <View style={topStyle} />
                <View style={centerStyle} />
                <View style={bottomStyle} />
            </>
        </TouchableOpacity>
    )
}

export default Candle;

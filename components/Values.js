import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Row from '../components/Row';
import moment from 'moment'

const formatValue = (value) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(value);

const Values = ({ candles, caliber }) => {

    const [{ date, open, close, high, low }] = useState(candles[0]);
    const diff = `${((close - open) * 100) / open}`;
    // to compensate for negative sign 
    const change = close - open < 0 ? diff.substring(0, 5) : diff.substring(0, 4);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.table}>
                <View style={styles.column}>
                    <Row label="Open" value={formatValue(open)} />
                    <Row label="Close" value={formatValue(close)} />
                    <Row label="Volumn" value="" />
                </View>
                <View style={styles.separator} />
                <View style={styles.column}>
                    <Row label="High" value={formatValue(high)} />
                    <Row label="Low" value={formatValue(low)} />
                    <Row label="Change" value={`${change}%`} color={close - open > 0 ? 'green' : 'red'} />
                </View>
            </View>
            <Text style={styles.date}> {moment(date).format("h:mm MMM Do, YYYY")} </Text>
        </SafeAreaView>
    )
}

export default Values;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
    },
    table: {
        flexDirection: "row",
        padding: 16
    },
    date: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"
    },
    column: {
        flex: 1
    },
    separator: {
        width: 16
    }
})
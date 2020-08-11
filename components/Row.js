import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = ({ label, value, color }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={[styles.value, { color: color || "white" }]}>{value}</Text>
        </View>
    )
}

export default Row;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 20,
        color: "grey"
    },
    value: {
        fontSize: 20,
        fontVariant: ["tabular-nums"]
    }
});

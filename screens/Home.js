import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Home = ({ route, navigation }) => {
    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 36, fontWeight: "bold", padding: 20, textAlign: "center" }}>
                Financial{"\n"}Candle{"\n"}Chart

            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chart")}
            >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Go get chart!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home;
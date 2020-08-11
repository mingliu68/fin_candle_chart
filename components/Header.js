import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from "@expo/vector-icons";


const Tabs = ({ tabs }) => (
    <View style={styles.tabContainer}>
        {
            tabs.map((tab, index) => (
                <View style={styles.tab} key={index}>
                    <Text style={index === 0 ? styles.tabLabelActive : styles.tabLabel}>
                        {tab.toUpperCase()}
                    </Text>
                </View>
            ))
        }
    </View>
)

const Header = (props) => {
    return (
        <View style={StyleSheet.absoluteFill}>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={props.goBack}
                            style={{ zIndex: 5 }}
                        >
                            <SimpleLineIcons name="arrow-left" size={32} color="white" style={styles.icon} />
                        </TouchableOpacity>
                        <View style={styles.rightColumn}>
                            <Text style={styles.title}>BTC - USD</Text>
                            <Text style={styles.subtitle}>2.2k BTC 24hr vol</Text>
                        </View>
                        <View style={styles.leftColumn}>
                            <Text style={styles.title}>$7,543.12</Text>
                            <Text style={[styles.subtitle, { color: "#4AFA9A" }]}>
                                +5.11%
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tabs}>
                        <Tabs tabs={["Price", "Depth", "Book"]} />
                        <Tabs tabs={["1D"]} />
                    </View>
                </View>
            </SafeAreaView>


        </View>

    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 50,

    },
    content: {
        flex: 1,
        padding: 16,

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#999",
        paddingBottom: 10,
        borderBottomWidth: 0.5
    },
    icon: {
        marginRight: 16
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 16,
        color: "#d3d3d3"
    },
    rightColumn: {
        flex: 1
    },
    leftColumn: {
        flex: 1,
        alignItems: "flex-end"
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16
    },
    tabContainer: {
        backgroundColor: "#222324",
        borderRadius: 8,
        flexDirection: "row"
    },
    tab: {
        padding: 8
    },
    tabLabel: {
        fontSize: 14,
        fontVariant: ["tabular-nums"],
        color: "#d3d3d3"
    },
    tabLabelActive: {
        fontSize: 14,
        fontVariant: ["tabular-nums"],
        color: "white",
        fontWeight: "500"
    }
});
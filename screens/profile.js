import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Keyboard,
    KeyboardAvoidingView,
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from "react-native";
import { AzureInstance, AzureLoginView } from "auth4061";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { Alert } from "react-native";
import { globalStyles } from "../styles/global";

export default function ProfileScreen({ route, navigation }) {
    const signOut = () =>
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          RCTNetworking.clearCookies(() => { });
          setLoginSuccess(false);
          navigation.navigate("Login");
        },
      },
    ]);
    return (
        <View style={globalStyles.container}>
            <Text>
                {route.params}
            </Text>

            {/* Sign Out */}
            <View style={styles.signOutContainer}>
                <TouchableOpacity
                    onPress={signOut}
                    title="Sign Out"
                    style={styles.signOutButton}
                    accessibilityLabel="Sign Out of Azure"
                >
                    <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    signOutContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "12%",
        borderStyle: "solid",
        borderColor: "black",
        borderTopWidth: 2,
    },
    signOutButton: {
        backgroundColor: "#800000",
        padding: 20,
        borderRadius: 15,
        width: "65%",
    },
    signOutText: {
        textAlign: "center",
        color: "#FFD700",
        fontWeight: "bold",
        fontSize: 17,
    },
    OrdersWrapper: {
        flex: 1,
        paddingVertical: "0%",
        paddingHorizontal: "5%",
    },
    viewOrdersWrapper: {
        alignItems: "center",
        // paddingVertical: "4%",
    },
    viewOrdersText: {
        textAlign: "center",
        color: "#FFD700",
        fontSize: 17,
        fontWeight: "bold",
    },
    viewOrdersButton: {
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#800000",
        borderRadius: 10,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        paddingLeft: "10%",
        paddingRight: "10%",
        width: "100%",
        height: "30%",
    },
    createOrderPlus: {
        fontWeight: "bold",
        fontSize: 25,
        top: "-1%",
        color: "#800000",
    },
    createOrderIcon: {
        borderStyle: "solid",
        borderRadius: 25,
        height: "35%",
        width: "13%",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        top: -1,
        backgroundColor: "#FFD700",
        borderColor: "#800000",
    },
    availableOrder: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: "5%",
        marginLeft: "5%",
        color: "#800000",
    },
    availableOrderList: {
        top: "-7%",
    },
    myOrderList: {
        top: "-4%",
    },
});

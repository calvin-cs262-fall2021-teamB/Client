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

export default function OrderOptionsScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [orderData, setData] = useState([]);

    const getOrders = async () => {
        try {
            const response = await fetch('https://still-crag-08186.herokuapp.com/orders');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getOrders();
    }, []);

    const handleCreateOrder = () => {
        navigation.navigate("Menu");
    };

    const handleViewOrders = () => {
        navigation.navigate("AvailableOrders");
    };

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [azureLoginObject, setAzureLoginObject] = useState({});
    const credentials = {
        client_id: "9fec5959-1f33-4948-9675-e5ec4e696799",
        client_secret: "d7ad096d-2e7f-4ce2-adf6-9c6ebf750c43",
        redirect_uri: "http://localhost:3000/Login",
        scope: "User.Read email offline_access profile openid",
        prompt: "consent",
    };
    const azureInstance = new AzureInstance(credentials);

    const onLoginSuccess = async () => {
        try {
            const result = await azureInstance.getUserInfo();
            setLoginSuccess(true);
            setAzureLoginObject(result);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log("error getting user info");
            console.error(err);
        }
    };

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

    if (!loginSuccess) {
        return (
            <AzureLoginView
                azureInstance={azureInstance}
                loadingMessage="Requesting access token again"
                onSuccess={onLoginSuccess}
            />
        );
    }

    const { userPrincipalName, givenName } = azureLoginObject;

    return (
        <View style={globalStyles.container}>
            <View style={styles.OrdersWrapper}>
                {/* My Orders */}
                <View style={globalStyles.orderLists}>
                    <Text style={globalStyles.sectionTitle}>My Orders</Text>
                    <TouchableOpacity
                        style={styles.createOrderIcon}
                        onPress={() => handleCreateOrder()}
                    >
                        <Text style={styles.createOrderPlus}>+</Text>
                    </TouchableOpacity>
                </View>

                {/* Available Orders */}
                <View style={globalStyles.orderLists}>
                    <Text style={globalStyles.sectionTitle}>Available Orders</Text>
                    <View style={styles.viewOrdersWrapper}>
                        <TouchableOpacity
                            style={styles.viewOrdersButton}
                            onPress={() => handleViewOrders()}
                        >
                            <Text style={styles.viewOrdersText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={styles.availableOrderList}
                    data={orderData}
                    keyExtractor={({ id }, index) => id.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.availableOrder}>
                            Order {item.id}, {item.userid}, {item.dininghallid}, {item.status}
                        </Text>
                    )}
                />
            </View>

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
});

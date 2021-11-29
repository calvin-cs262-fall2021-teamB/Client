import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import ChrisOrderScreen from "../screens/orderfood";
import OrderDetailsScreen from "../screens/orderDetails";
import OrderOptionsScreen from "../screens/orderOptions";
import AvailableOrdersScreen from "../screens/availableOrders";
import MenuScreen from "../screens/menu";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return( 
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                position: "absolute",
                backgroundColor: "#ffffff",
                shadowColor: '#ffffff'
            },

        }}
        >
        <Tab.Screen name="order" 
                    component={ChrisOrderScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                source={require("../images/order.png")}
                                resizeMode = "stretch"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#000000" : "#6c6c6c"
                                }}
                                />
                            </View>
                        )  
                    }}                   
                    />

        <Tab.Screen name="deliver"
                    component={AvailableOrdersScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                source={require("../images/deliver.png")}
                                resizeMode = "stretch"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#000000" : "#6c6c6c"
                                }}
                                />
                            </View>
                        )  
                    }}                   
                    />
        <Tab.Screen name="profile"
                    component={MenuScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image
                                source={require("../images/profile.png")}
                                resizeMode = "stretch"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#000000" : "#6c6c6c"
                                }}
                                />
                            </View>
                        )  
                    }}                   
                    />
    </Tab.Navigator>
    );

}

export default Tabs;

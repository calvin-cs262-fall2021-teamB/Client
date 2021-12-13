import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import LandingScreen from "../screens/orderfood";
import AvailableOrdersScreen from "../screens/availableOrders";
import ProfileScreen from "../screens/profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ffffff",
          shadowColor: "#ffffff",
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Order"
        component={LandingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../images/order.png")}
                resizeMode="stretch"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#6c6c6c",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Deliver"
        component={AvailableOrdersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../images/deliver.png")}
                resizeMode="stretch"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#6c6c6c",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../images/profile.png")}
                resizeMode="stretch"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#6c6c6c",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

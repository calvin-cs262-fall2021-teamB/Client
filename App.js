import React from "react";
import { CLIENT_SECRET_KEY } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AzureInstance, AzureLoginView } from "auth4061";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import HomeScreen from "./screens/login";
import OrderOptionsScreen from "./screens/orderOptions";
import Header from "./shared/header";
import MenuScreen from "./screens/menu";
import CartScreen from "./screens/cart";
import AvailableOrdersScreen from "./screens/availableOrders";
import ProfileScreen from "./screens/profile";
import DeliverOrderScreen from "./screens/deliverOrder";
import Tabs from "./shared/bottomHeader";
import MyOrderDetails from "./screens/myOrderDetails";
import DeliveryDetails from "./screens/deliveryDetails";
import LandingScreen from "./screens/landing";

const Stack = createNativeStackNavigator();
function Landing() {
  return <Tabs />;
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: () => <Header navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="OrderOptions"
          component={OrderOptionsScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="AvailableOrders"
          component={AvailableOrdersScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Order Details"
          component={DeliveryDetails}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="My Order Details"
          component={MyOrderDetails}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Deliver Order"
          component={DeliverOrderScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Order"
          component={LandingScreen}
          options={({ navigation }) => ({ headerShown: true })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

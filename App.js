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
import OrderDetailsScreen from "./screens/orderDetails";
import OrderDetails2Screen from "./screens/orderDetails2";
import ProfileScreen from "./screens/profile";
import DeliverOrderScreen from "./screens/deliverOrder";
const Stack = createNativeStackNavigator();
function Home(){
  return(  <Tabs/>
    )

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
          options={{headerShown: false}}
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
          component={OrderDetailsScreen}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="My Order Details"
          component={OrderDetails2Screen}
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
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}
export default App;
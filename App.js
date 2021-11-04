import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/login";
import OrderOptionsScreen from "./screens/orderOptions";
import { globalStyles } from './styles/global';
import  Header  from './shared/header';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center'
        }} 
        >
      <Stack.Screen
        name="Login"
        component={HomeScreen}
        options={({ navigation }) => ({
          // headerStyle: {
          //   backgroundColor: '#C7C7C7'
          // } ,
          headerTitle: props => <Header {...props} />
        })}
      />
        <Stack.Screen 
          name="OrderOptions"
          component={OrderOptionsScreen}
          options={({ navigation }) => ({
            // headerStyle: {
            //   backgroundColor: '#C7C7C7'
            // } 
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

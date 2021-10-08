import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home";
import DetailsScreen from './screens/details';
import AboutScreen from './screens/about'
import Header from './shared/header';
import { globalStyles } from './styles/global';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center'
        }} 
        >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#C7C7C7'
          } ,
          headerTitle: props => <Header {...props} />
        })}
      />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
                <Header navigation={navigation}/>
            )
          })} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

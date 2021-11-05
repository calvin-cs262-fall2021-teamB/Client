import React from "react";
import { CLIENT_SECRET_KEY } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AzureInstance, AzureLoginView } from "auth4061"
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import HomeScreen from "./screens/login";
import OrderOptionsScreen from "./screens/orderOptions";
import  Header  from './shared/header';
import MenuScreen from "./screens/menu";
import CartScreen from "./screens/cart";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
        }} 
        >
      <Stack.Screen
        name="Login"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Header navigation={navigation} />
        })}
      />
        <Stack.Screen 
          name="OrderOptions"
          component={OrderOptionsScreen}
          options={({ navigation }) => ({
          })} />
        <Stack.Screen 
          name="Menu"
          component={MenuScreen}
          options={({ navigation }) => ({
          })} />
        <Stack.Screen 
          name="Cart"
          component={CartScreen}
          options={({ navigation }) => ({
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Get ready to login to Azure</Text>
//       <View style={styles.button}>
//         <Button
//           onPress={() => navigation.navigate("SignIn")}
//           title="Sign In"
//           style={styles.title}
//           color={buttonColour}
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// const SignInScreen = ({ navigation }) => {
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [azureLoginObject, setAzureLoginObject] = useState({});
//   const credentials = {
//     client_id: "9fec5959-1f33-4948-9675-e5ec4e696799",
//     client_secret: 'd7ad096d-2e7f-4ce2-adf6-9c6ebf750c43',
//     redirect_uri: "http://localhost:3000/Login",
//     scope:
//       "User.ReadBasic.All Mail.Read offline_access openid User.Read User.ReadWrite", //User.Read.All User.ReadWrite.All
//   };
//   const azureInstance = new AzureInstance(credentials);

//   const onLoginSuccess = async () => {
//     try {
//       const result = await azureInstance.getUserInfo();
//       setLoginSuccess(true);
//       setAzureLoginObject(result);
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.log("error getting user info");
//       console.error(err);
//     }
//   };

//   const signOut = () =>
//     Alert.alert("Sign Out", "Are you sure you want to sign out?", [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel",
//       },
//       {
//         text: "OK",
//         onPress: () => {
//           RCTNetworking.clearCookies(() => {});
//           setLoginSuccess(false);
//           navigation.navigate("Home");
//         },
//       },
//     ]);

//   if (!loginSuccess) {
//     return (
//       <AzureLoginView
//         azureInstance={azureInstance}
//         loadingMessage="Requesting access token again"
//         onSuccess={onLoginSuccess}
//       />
//     );
//   }

//   const { userPrincipalName, givenName } = azureLoginObject;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome {givenName}</Text>
//       <Text style={styles.text}>
//         You logged into Azure with {userPrincipalName}
//       </Text>
//       <View style={styles.button}>
//         <Button
//           onPress={signOut}
//           title="Sign Out"
//           style={styles.title}
//           color={buttonColour}
//           accessibilityLabel="Sign Out of Azure"
//         />
//       </View>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Navigator>
//         <Screen name="Home" component={HomeScreen} />
//         <Screen name="SignIn" component={SignInScreen} />
//       </Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     backgroundColor: "#007AFF",
//     padding: 4,
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//   },
//   text: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
// });

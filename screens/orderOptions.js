import React, {useState} from 'react';
import {StyleSheet, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import {globalStyles} from '../styles/global';
import { AzureInstance, AzureLoginView } from "react-native-azure-ad-2";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { Button, Alert } from "react-native";

export default function OrderOptionsScreen({ navigation }) {
    const [order, setOrder] = useState();
    const [orderItems, setOrderItems] = useState([]);

    const handleAddOrder = () => {
        Keyboard.dismiss();
        setOrderItems([...orderItems, order]);
        setOrder(null);
    }

    const completeOrder = (index) => {
        let itemsCopy = [...orderItems];
        itemsCopy.splice(index, 1);
        setOrderItems(itemsCopy);
    }

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [azureLoginObject, setAzureLoginObject] = useState({});
    const credentials = {
        client_id: "9fec5959-1f33-4948-9675-e5ec4e696799",
        client_secret: 'd7ad096d-2e7f-4ce2-adf6-9c6ebf750c43',
        redirect_uri: "http://localhost:3000/Login",
        scope:
        "User.ReadBasic.All Mail.Read offline_access openid User.Read User.ReadWrite", //User.Read.All User.ReadWrite.All
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
            RCTNetworking.clearCookies(() => {});
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
            <View style={globalStyles.OrdersWrapper}>
                {/* My Orders */}
                <View style={globalStyles.myOrders}>
                    <Text style={globalStyles.sectionTitle}>My Orders</Text>
                    <KeyboardAvoidingView 
                        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TouchableOpacity onPress={() => handleAddOrder()}>
                            <View style={ globalStyles.addWrapper }>
                                <TextInput style={globalStyles.addText} placeholder='New Order' value={order} onChangeText={text=>setOrder(text)}></TextInput>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>

                <View style={globalStyles.items}>
                {/* This is where the orders will go */}
                {
                    orderItems.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => completeOrder(index)}>
                            <Order text={item} />
                        </TouchableOpacity>
                    )
                    })
                }
                </View>

                {/* Available Orders */}
                <Text style={globalStyles.sectionTitle}>Available Orders</Text>
            </View>
        
            {/* Choose an Order */}
            <View style={ globalStyles.chooseOrderWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={globalStyles.chooseOrderText}>Choose an Order</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
       <Text style={styles.text}>Welcome {givenName}</Text>
       <Text style={styles.text}>
         You logged into Azure with {userPrincipalName}
       </Text>
       <View style={styles.button}>
         <Button
          onPress={signOut}
          title="Sign Out"
          style={styles.title}
          accessibilityLabel="Sign Out of Azure"
        />
      </View>
    </View>
        </View>
    );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 4,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  text: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

import React, {useState} from 'react';
import {StyleSheet, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import { AzureInstance, AzureLoginView } from "auth4061";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { Button, Alert } from "react-native";
import { globalStyles } from '../styles/global';

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

    const handleCreateOrder = () => {
        navigation.navigate('Menu')
    }

    const [loginSuccess, setLoginSuccess] = useState(false);
    const [azureLoginObject, setAzureLoginObject] = useState({});
    const credentials = {
        client_id: "9fec5959-1f33-4948-9675-e5ec4e696799",
        client_secret: 'd7ad096d-2e7f-4ce2-adf6-9c6ebf750c43',
        redirect_uri: "http://localhost:3000/Login",
        scope: 
        "User.Read email offline_access profile openid", //User.Read.All User.ReadWrite.All
        prompt: 'consent',
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
            <View style={styles.OrdersWrapper}>
                {/* My Orders */}
                <View style={globalStyles.myOrders}>
                    <Text style={globalStyles.sectionTitle}>My Orders</Text>
                    <KeyboardAvoidingView 
                        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TouchableOpacity onPress={() => handleAddOrder()}>
                            <View style={ styles.addWrapper }>
                                <TextInput style={styles.addText} placeholder='New Order' value={order} onChangeText={text=>setOrder(text)}></TextInput>
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
            <View style={ styles.chooseOrderWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={globalStyles.chooseOrderText}>Choose an Order</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mindyContainer}>
                <Text style={styles.mindyText}>Welcome {givenName}</Text>
                <Text style={styles.mindyText}>
                    You logged into Azure with {userPrincipalName}
                </Text>
                <View style={styles.mindyButton}>
                    <Button
                    onPress={signOut}
                    title="Sign Out"
                    style={styles.mindyTitle}
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
  mindyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mindyButton: {
    backgroundColor: "#007AFF",
    padding: 4,
  },
  mindyTitle: {
    textAlign: "center",
    marginVertical: 8,
  },
  mindyText: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  OrdersWrapper: {
    flex: 1,
    paddingVertical: '15%',
    paddingHorizontal: '5%',
  },
  chooseOrderWrapper: {
    alignItems: 'center',
    paddingVertical: '12%',
  },
  addWrapper: {
    width: 100,
    height: 37,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontWeight: 'bold',
  },
});

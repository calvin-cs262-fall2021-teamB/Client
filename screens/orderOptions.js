import React, {useState} from 'react';
import {StyleSheet, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import { AzureInstance, AzureLoginView } from "auth4061";
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
        "Mail.Read offline_access User.ReadBasic.All Mail.Read openid User.Read User.ReadWrite", //User.Read.All User.ReadWrite.All
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
        <View style={orderStyles.container}>
            <View style={orderStyles.OrdersWrapper}>
                {/* My Orders */}
                <View style={orderStyles.myOrders}>
                    <Text style={orderStyles.sectionTitle}>My Orders</Text>
                    <KeyboardAvoidingView 
                        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TouchableOpacity onPress={() => handleAddOrder()}>
                            <View style={ orderStyles.addWrapper }>
                                <TextInput style={orderStyles.addText} placeholder='New Order' value={order} onChangeText={text=>setOrder(text)}></TextInput>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>

                <View style={orderStyles.items}>
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
                <Text style={orderStyles.sectionTitle}>Available Orders</Text>
            </View>
        
            {/* Choose an Order */}
            <View style={ orderStyles.chooseOrderWrapper }>
                <TouchableOpacity style={ orderStyles.input }>
                    <Text style={orderStyles.chooseOrderText}>Choose an Order</Text>
                </TouchableOpacity>
            </View>
            <View style={orderStyles.mindyContainer}>
       <Text style={orderStyles.mindyText}>Welcome {givenName}</Text>
       <Text style={orderStyles.mindyText}>
         You logged into Azure with {userPrincipalName}
       </Text>
       <View style={orderStyles.mindyButton}>
         <Button
          onPress={signOut}
          title="Sign Out"
          style={orderStyles.mindyTitle}
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

const orderStyles = StyleSheet.create({
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
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
  },
  OrdersWrapper: {
    flex: 1,
    paddingVertical: '15%',
    paddingHorizontal: '5%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  chooseOrderWrapper: {
    alignItems: 'center',
    paddingVertical: '12%',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#800000',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 226,
    height: 47,
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
  myOrders: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  chooseOrderText: {
    textAlign: 'center',
    color: 'white',
  },
});

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { AzureInstance, AzureLoginView } from "auth4061";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { Alert } from "react-native";
import { globalStyles } from "../styles/global";

export default function OrderOptionsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [orderData, setData] = useState([]);
  const [myOrderData, setMyData] = useState([]);
  const [myIsLoading, setMyLoading] = useState(true);
  const [UserID, setUserID] = useState([]);
  const [UserFname, setUserFname] = useState([]);
  const [UserLname, setUserLname] = useState([]);
  const [UserLocation, setUserLocation] = useState([]);
  const [MyActiveOrders, setMyActiveOrderData] = useState([]);
  const getOrders = async () => {
    console.log(route.params);
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/orders"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const getMyActiveOrders = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/myActiveOrders/" +
          route.params.UserData.id
      );
      const json = await response.json();
      setMyActiveOrderData(json);
    } catch (error) {
      console.log("no active orders yet");
    } finally {
      setMyLoading(false);
    }
  };
  const getMyOrders = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/myOrders/" +
          route.params.UserData.id
      );
      const json = await response.json();
      setMyData(json);
    } catch (error) {
      console.log("no active orders yet");
    } finally {
      setMyLoading(false);
    }
  };
  const handleNavigate = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/users/" + UserID
      );
      const json = await response.json();
      navigation.navigate("OrderOptions", { UserFound: true, UserData: json });
    } catch (error) {
      navigation.navigate("OrderOptions", {
        UserFound: false,
        UserData: UserID,
      });
    }
  };
  const handleCreateUser = async () => {
    console.log(UserID);
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/users",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ID: parseInt(UserID),
            fname: UserFname.toString(),
            lname: UserLname.toString(),
            location: UserLocation.toString(),
          }),
        }
      );
      Alert.alert("Success!", "Welcome to KnightDash", [
        {
          text: "OK",
          onPress: () => {
            handleNavigate();
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  //update upon first time visited
  useEffect(() => {
    if (route.params.UserFound) {
      getMyOrders();
      getMyActiveOrders();
    } else {
      setUserID(route.params.UserData);
    }
  }, []);
  const handleCreateOrder = async () => {
    if (myOrderData.length < 1) {
      try {
        const response = await fetch(
          "https://still-crag-08186.herokuapp.com/order",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userID: parseInt(route.params.UserData.id),
              diningHallId: 1,
              status: "active",
            }),
          }
        );
        navigation.navigate("Main", route.params);
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert("Oops!", "You may only have one active order at a time.", [
        {
          text: "OK",
        },
      ]);
    }
  };
  const handleProfile = () => {
    navigation.navigate("Profile", route.params);
  };
  const handleReloadPage = () => {
    getOrders();
    getMyOrders();
    getMyActiveOrders();
  };
  const handleViewOrders = () => {
    navigation.navigate("AvailableOrders", route.params);
  };

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [azureLoginObject, setAzureLoginObject] = useState({});
  const credentials = {
    client_id: "9fec5959-1f33-4948-9675-e5ec4e696799",
    client_secret: "d7ad096d-2e7f-4ce2-adf6-9c6ebf750c43",
    redirect_uri: "http://localhost:3000/Login",
    scope: "User.Read email offline_access profile openid",
    prompt: "consent",
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
  while (!route.params.UserFound) {
    console.log(route.params);
    return (
      <View style={globalStyles.container}>
        <Text>Welcome New User</Text>
        <Text>Please fill out your user details</Text>
        <TextInput
          style={styles.loginMessage}
          placeholder="Enter your first name"
          onChangeText={(text) => setUserFname(text)}
        ></TextInput>
        <TextInput
          style={styles.loginMessage}
          placeholder="Enter your last name"
          onChangeText={(text) => setUserLname(text)}
        ></TextInput>
        <TextInput
          style={styles.loginMessage}
          placeholder="Enter your location"
          onChangeText={(text) => setUserLocation(text)}
        ></TextInput>
        <TouchableOpacity
          onPress={() => handleCreateUser()}
          style={styles.buttonContainer}
        >
          <View style={styles.submitContainer}>
            <Text style={styles.text}>{"Create User"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={globalStyles.container}>
      <View style={styles.OrdersWrapper}>
        {/* My Orders */}
        <View style={globalStyles.orderLists}>
          <Text style={globalStyles.sectionTitle}>My Orders</Text>
          <TouchableOpacity
            style={styles.createOrderIcon}
            onPress={() => handleCreateOrder()}
          >
            <Text style={styles.createOrderPlus}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createOrderIcon}
            onPress={() => handleReloadPage()}
          >
            <Text style={styles.createOrderPlus}>r</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createOrderIcon}
            onPress={() => handleProfile()}
          >
            <Text style={styles.createOrderPlus}>p</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.myOrderList}
          data={myOrderData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={styles.availableOrder}
                onPress={() => navigation.navigate("My Order Details", item)}
              >
                Order {item.id}, {item.status}
              </Text>
            </TouchableOpacity>
          )}
        />
        {/* Available Orders */}
        <View style={globalStyles.orderLists}>
          <Text style={globalStyles.sectionTitle}>Available Orders</Text>
          <View style={styles.viewOrdersWrapper}>
            <TouchableOpacity
              style={styles.viewOrdersButton}
              onPress={() => handleViewOrders()}
            >
              <Text style={styles.viewOrdersText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.availableOrderList}
          data={orderData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={styles.availableOrder}
                onPress={() =>
                  navigation.navigate("Order Details", {
                    item: item,
                    params: route.params,
                  })
                }
              >
                Order {item.id}, {item.location}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Sign Out */}
      <View style={styles.signOutContainer}>
        <TouchableOpacity
          onPress={signOut}
          title="Sign Out"
          style={styles.signOutButton}
          accessibilityLabel="Sign Out of Azure"
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signOutContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "12%",
    borderStyle: "solid",
    borderColor: "black",
    borderTopWidth: 2,
  },
  signOutButton: {
    backgroundColor: "#800000",
    padding: 20,
    borderRadius: 15,
    width: "65%",
  },
  signOutText: {
    textAlign: "center",
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 17,
  },
  OrdersWrapper: {
    flex: 1,
    paddingVertical: "0%",
    paddingHorizontal: "5%",
  },
  viewOrdersWrapper: {
    alignItems: "center",
    // paddingVertical: "4%",
  },
  viewOrdersText: {
    textAlign: "center",
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "bold",
  },
  viewOrdersButton: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#800000",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    paddingLeft: "10%",
    paddingRight: "10%",
    width: "100%",
    height: "30%",
  },
  createOrderPlus: {
    fontWeight: "bold",
    fontSize: 25,
    top: "-1%",
    color: "#800000",
  },
  createOrderIcon: {
    borderStyle: "solid",
    borderRadius: 25,
    height: "35%",
    width: "13%",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    top: -1,
    backgroundColor: "#FFD700",
    borderColor: "#800000",
  },
  availableOrder: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: "5%",
    marginLeft: "5%",
    color: "#800000",
  },
  availableOrderList: {
    top: "-7%",
  },
  myOrderList: {
    top: "-4%",
  },
  loginMessage: {
    height: 40,
    marginHorizontal: 5,
    marginBottom: 15,
    fontSize: 18,
    color: "#333",
    borderColor: "#800000",
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#800000",
    borderRadius: 10,
  },
  submitContainer: {
    flex: 0,
    padding: 10,
    marginTop: "3%",
    marginBottom: "3%",
    justifyContent: "center",
  },
});

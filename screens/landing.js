// import React, { useState, useEffect } from "react";
// import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
// import { globalStyles } from "../styles/global";

// export default function LandingScreen({ navigation, route }) {
//   const handleCart = () => {
//     navigation.navigate("Cart", {
//       foodData: foodData.concat(beverageData),
//       userDetails: route.params,
//     });
//   };
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
  Image,
  Alert,
} from "react-native";
import { AzureInstance, AzureLoginView } from "auth4061";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { globalStyles } from "../styles/global";
import BeverageMenu from "../components/beverageMenu";
import FoodMenu from "../components/foodMenu";
export default function LandingScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [orderData, setData] = useState([]);
  const [myOrderData, setMyData] = useState([]);
  const [myIsLoading, setMyLoading] = useState(true);

  //profile
  const [UserID, setUserID] = useState([]);
  const [UserFname, setUserFname] = useState([]);
  const [UserLname, setUserLname] = useState([]);
  const [UserLocation, setUserLocation] = useState([]);
  const handleCart = () => {
    navigation.navigate("Cart", {
      foodData: foodData.concat(beverageData),
      userDetails: route.params,
    });
  };
  const [foodData, setFoodData] = useState([]);
  const [beverageData, setBeverageData] = useState([]);
  const [MyActiveOrders, setMyActiveOrderData] = useState([]); //my orders
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
      navigation.navigate("Landing", { UserFound: true, UserData: json });
    } catch (error) {
      navigation.navigate("Landing", {
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
      <Text style={styles.TitleFont}>Order</Text>
      <Text style={styles.TitleDescription}>Create an Order</Text>

      <View style={styles.BottomWrapper}>
        <View style={styles.IconWrapper1}>
          <FoodMenu setFoodData={setFoodData} />
          <BeverageMenu setBeverageData={setBeverageData} />
          <TouchableOpacity
            onPressIn={() => handleCreateOrder()}
            onPressOut={() => handleCart()}
            style={styles.CartButton}
          >
            <Image
              style={styles.IconBox2}
              source={require("../images/cart.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.PictureWrap}>
          <Image
            style={styles.Picture}
            source={require("../images/foody.png")}
          />
          <Text style={styles.PictureText}>Please</Text>
          <Text style={styles.PictureText2}>
            Choose one of the options above
          </Text>
        </View>
        <View style={{ flexDirection: "row", bottom: "5%", height: "10%" }}>
          <TouchableOpacity
            style={styles.IconBox}
            onPress={() => navigation.navigate("Landing", { UserFound: true })}
          >
            <Image
              style={styles.IconBox2}
              source={require("../images/order.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.IconBox}
            onPress={() => handleViewOrders()}
          >
            <Image
              style={styles.IconBox2}
              source={require("../images/deliver.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.IconBox}
            onPress={() => handleProfile()}
          >
            <Image
              style={styles.IconBox2}
              source={require("../images/profile.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "90%",
    marginTop: "12%",
    marginHorizontal: "5%",
  },

  utilityContainer: {
    marginTop: "0%",
    width: "90%",
    alignSelf: "center",
    height: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  TitleFont: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: "3%",
    marginHorizontal: "5%",
  },

  TitleDescription: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "0%",
    marginHorizontal: "5%",
  },

  PictureWrap: {
    flex: 1,
    bottom: "33%",
    borderRadius: 20,
    backgroundColor: "#800000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },

  Picture: {
    height: "165%",
    width: "100%",
    borderRadius: 10,
    resizeMode: "stretch",
    alignSelf: "center",
  },

  PictureText: {
    fontSize: 24,
    position: "absolute",
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: "0%",
    marginLeft: "2%",
  },
  PictureText2: {
    fontSize: 16,
    position: "absolute",
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: "7%",
    marginLeft: "2%",
  },

  BottomWrapper: {
    flex: 1,
    flexDirection: "column",
    marginTop: "3%",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  IconWrapper1: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 15,
  },

  IconBox: {
    flex: 1,
    backgroundColor: "#f2cd00",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  IconBox2: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },

  utilityWrapper: {
    width: "10%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },

  utilityWrapper2: {
    width: "12%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },

  ContentWrappers: {
    width: "90%",
    height: "60%",
    alignSelf: "center",
    marginTop: "3%",
  },
  CartButton: {
    backgroundColor: "red",
    marginBottom: "63%",
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    backgroundColor: "#800000",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});

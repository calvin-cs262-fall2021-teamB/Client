import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { AzureInstance, AzureLoginView } from "auth4061";
import RCTNetworking from "react-native/Libraries/Network/RCTNetworking";
import { globalStyles } from "../styles/global";

export default function ProfileScreen({ route, navigation }) {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [azureLoginObject, setAzureLoginObject] = useState({});
  const [myOrderData, setMyData] = useState([]);
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
    }
  };
  const handleViewOrders = () => {
    navigation.navigate("AvailableOrders", route.params);
  };

  const handleProfile = () => {
    navigation.navigate("Profile", route.params);
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
  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <View style={styles.profileContainer}>
      <View style={{ flex: 1, marginTop: "10%", marginLeft: 10 }}>
        <Text style={styles.userTitle}>User Information</Text>
        <Text style={styles.userInfo}>
          {"\nUser ID: " + route.params.UserData.id}
          {"\nFirst Name: " + route.params.UserData.fname}
          {"\nLast Name: " + route.params.UserData.lname}
          {"\nLocation: " + route.params.UserData.location}
        </Text>
        {/* My Orders */}
        <View style={globalStyles.orderLists}>
          <Text style={styles.sectionTitle}>{"\n"}My Orders</Text>
        </View>
        <FlatList
          style={styles.myOrderList}
          data={myOrderData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.myOrders}>
              <Text
                style={styles.availableOrder}
                onPress={() => navigation.navigate("My Order Details", item)}
              >
                Order {item.id}, {item.status}
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
      <View style={{ flexDirection: "row", bottom: "5%", height: "9%" }}>
        <TouchableOpacity
          style={styles.IconBox}
          onPress={() =>
            navigation.navigate("Order", route.params, { UserFound: true })
          }
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
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    //flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2cd00",
    height: "100%",
  },
  signOutContainer: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    top: "0%",
    marginBottom: "6%",
  },
  signOutButton: {
    backgroundColor: "#800000",
    padding: 20,
    borderRadius: 15,
    width: "65%",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  signOutText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  OrdersWrapper: {
    flex: 1,
    paddingVertical: "0%",
    paddingHorizontal: "5%",
  },
  viewOrdersWrapper: {
    alignItems: "center",
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
    padding: "2%",
    color: "#800000",
    marginVertical: "0%",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  availableOrderList: {
    top: "-7%",
  },
  myOrderList: {
    top: "-4%",
  },
  userInfo: {
    fontWeight: "bold",
    fontSize: 20,
  },
  userTitle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  IconBox: {
    flex: 1,
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  IconBox2: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "6%",
  },
  myOrders: {
    backgroundColor: "white",
    width: "60%",
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 5,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

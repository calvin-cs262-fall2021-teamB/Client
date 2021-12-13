import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useSafeAreaFrame } from "react-native-safe-area-context";

export default function DeliverOrderScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [myOrderData, setMyData] = useState([]);
  const getOrderItems = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/items/" + route.params.item.id
      );
      const json = await response.json();
      setMyData(json);
      console.log(myOrderData);
    } catch (error) {
      console.log("no items yet");
    } finally {
      setLoading(false);
    }
  };
  const handleDeliverOrder = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/order/" + route.params.item.id,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: route.params.item.id,
            diningHallId: 1,
            status: "completed",
          }),
        }
      );
      console.log(route.params);
      Alert.alert(
        "Thank you!",
        "Please deliver the order as soon as possible.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Order", {
                UserFound: route.params.params.UserFound,
                UserData: route.params.params.UserData,
              });
            },
          },
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          {/* <Text style={styles.title}>Order ID: {route.params.item.id}</Text> */}
          <Text style={styles.title}>
            Name: {route.params.item.fname} {route.params.item.lname}
          </Text>
          <Text style={styles.title}>
            Location: {route.params.item.location}
          </Text>
          <Text style={styles.title}>Order Status: {"In-transit"}</Text>
          <Text style={styles.title}>Order Total:</Text>
          <FlatList
            flexDirection={"row"}
            ListHeaderComponent={
              <Text style={styles.headerTitle}>Items to Deliver</Text>
            }
            ListFooterComponent={
              <Text style={{ backgroundColor: "#E5E5E5" }}></Text>
            }
            style={styles.availableOrderList}
            data={myOrderData}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <View style={globalStyles.container}>
                <View style={styles.contentWrapper}>
                  {/* will add item to 'cart' */}
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={styles.imageContent}
                      source={{ uri: item.image }}
                    />
                    <View style={styles.menuContent}>
                      <View style={{ flexDirection: "column" }}>
                        <Text style={styles.contentTextTitle}>
                          {item.itemname} {item.description}
                        </Text>
                        <Text style={styles.contentTextTitle2}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
      {/*Deliver Button */}
      {/* <View style={styles.dashWrapper}> */}
      <TouchableOpacity
        style={styles.input}
        onPress={() => handleDeliverOrder()}
      >
        <Text style={styles.detailsText}>Completed</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    margin: "4%",
  },
  addWrapper2: {
    marginTop: "5%",
    alignSelf: "center",
    width: "85%",
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: "2%",
  },
  contentWrapper: {
    marginLeft: "1.5%",
    marginTop: "1.5%",
    height: 125,
    width: "97%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  imageContent: {
    marginLeft: "1.5%",
    marginTop: "1%",
    height: "190%",
    width: "30%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowRadius: 50,
  },

  bottomWrapper: {
    marginTop: "20%",
    alignSelf: "center",
    width: "90%",
    height: "7%",
    backgroundColor: "#C4C4C4",
    borderRadius: 25,
    bottom: "6%",
  },

  menuContent: {
    marginLeft: "5%",
    marginTop: "1%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowRadius: 50,
  },

  contentTextTitle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  contentTextTitle2: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
  },
  numberButton: {
    marginTop: 5,
    alignSelf: "center",
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: "#9a9a9a",
  },
  absIcon: {
    marginTop: 1,
    marginLeft: "16%",
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#C4C4C4",
  },
  NumberText: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  availableOrderList: {
    top: "1%",
    marginVertical: "3%",
    alignSelf: "center",
    width: "105%",
    backgroundColor: "#C0C0C0",
    borderRadius: 10,
    borderColor: "#800000",
    borderWidth: 5,
  },
  detailsText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginHorizontal: "8%",
    alignItems: "center",
    // paddingVertical: 15,
    // paddingHorizontal: 15,
    backgroundColor: "#800000",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
    height: "10%",
    marginBottom: "5%",
  },

  imageContent: {
    marginLeft: "1.5%",
    marginTop: "1%",
    height: "190%",
    width: "30%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowRadius: 50,
  },
  menuContent: {
    marginLeft: "5%",
    marginTop: "1%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowRadius: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 1,
  },
});

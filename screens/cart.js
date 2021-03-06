import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Alert,
  RefreshControl,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function CartScreen({ navigation, route }) {
  const [myActiveOrderData, setmyActiveOrderData] = useState([]);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const orderPriceTotal = route.params.foodData.reduce(
    (totalPrice, item) => totalPrice + parseFloat(item.price.replace("$", "")),
    0
  );
  const getMyActiveOrders = async () => {
    console.log(route.params);
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/myActiveOrders/" +
          route.params.userDetails.UserData.id
      );
      const json = await response.json();
      setmyActiveOrderData(json);
    } catch (error) {
      console.log("no active orders yet");
    }
  };
  const handlePlaceOrder = async () => {
    await Promise.all(
      route.params.foodData.map(async (item) => {
        try {
          const response = await fetch(
            "https://still-crag-08186.herokuapp.com/orderItem",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderID: parseInt(myActiveOrderData.id),
                foodDrinkItemID: item.id,
              }),
            }
          );
        } catch (error) {
          console.error(error);
        }
      })
    );
  };
  useEffect(() => {
    getMyActiveOrders();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.itemsTitleWrapper}>
        {/*List Contents of Order */}
        <Text style={styles.reviewTitle}>Review Order</Text>
        <FlatList
          data={route.params.foodData}
          keyExtractor={({ id }, index) => id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>
                1x {item.itemname} = ({item.price})
              </Text>
            </View>
          )}
        />
      </View>
      <View>
        <Text style={styles.reviewTitle2}>
          Total Price: ${parseFloat(orderPriceTotal).toFixed(2)}
        </Text>
      </View>
      {/*Deliver Button */}
      <View style={styles.dashWrapper}>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => {
            handlePlaceOrder();
            Alert.alert("Congratulations!", "Thanks for placing your order.", [
              {
                text: "OK",
                onPress: () => {
                  navigation.navigate("Order", {
                    UserFound: route.params.userDetails.UserFound,
                    UserData: route.params.userDetails.UserData,
                  });
                },
              },
            ]);
          }}
        >
          <Text style={styles.detailsText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
  },
  dashWrapper: {
    flex: 0,
    alignItems: "center",
    height: "25%",
  },

  itemsTitleWrapper: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    justifyContent: "center",
  },
  detailsText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#FFD700",
    fontSize: 25,
    fontWeight: "bold",
  },
  item: {
    fontSize: 20,
    paddingBottom: 5,
  },
  reviewTitle: {
    fontWeight: "bold",
    fontSize: 35,
    paddingBottom: 10,
  },
  reviewTitle2: {
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 10,
    marginLeft: "5%",
    marginBottom: "3%",
  },
  placeOrder: {
    backgroundColor: "#800000",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000",
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    height: "30%",
  },
});

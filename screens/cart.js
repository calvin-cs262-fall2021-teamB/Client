import React, {useState, useEffect} from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function CartScreen({ navigation, route }) {
  const [itemID, setItemID] = useState('');
  const [orderID, setOrderID] = useState('');

  // const handleSetStates = () => {
  //   setItemID(item.id),
  //   setOrderID("1")
  // }

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch('https://still-crag-08186.herokuapp.com/orderItem', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderId: 1,
          foodDrinkItemID: 1,
        })
      });
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsTitleWrapper}>
        {/*List Contents of Order */}
        <Text style={styles.reviewTitle}>Review Order</Text>
        <FlatList
          data={route.params}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            // useEffect(() => {setItemID(item.id)}),
            // setOrderID("1"),
            <View>
              <Text style={styles.item}>{item.itemname}</Text>
            </View>
          )}
        />
      </View>
      {/*Deliver Button */}
      <View style={styles.dashWrapper}>
        <TouchableOpacity
          style={styles.placeOrder}
          onPress={() => handlePlaceOrder()}
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

import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";


export default function AvailableOrdersScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [orderData, setData] = useState([]);

  const getOrders = async () => {
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

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.itemsTitleWrapper}>
          {/* List Contents of Order */}
          <View style={styles.orderLists}>
            <Text style={globalStyles.sectionTitle}>All Orders</Text>
          </View>
          <FlatList
            style={styles.availableOrderList}
            data={orderData}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text
                  style={styles.availableOrder}
                  onPress={() => navigation.navigate("Order Details", item)}
                >
                  Order {item.id}, {item.location}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  dashWrapper: {
    flexDirection: "row",
    flex: 1,
    marginBottom: "5%",
    alignItems: "center",
  },

  itemsTitleWrapper: {
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    justifyContent: "center",
  },
  detailsText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "bold",
  },
  availableOrder: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: "5%",
    marginLeft: "5%",
    color: "#800000",
  },
  availableOrderList: {
    top: "1%",
  },
  input: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginLeft: "15%",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#800000",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "70%",
    height: "15%",
  },
  orderLists: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "3%",
  },
});

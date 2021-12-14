import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  RefreshControl,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function AvailableOrdersScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [orderData, setData] = useState([]);

  const handleViewOrders = () => {
    navigation.navigate("AvailableOrders", route.params);
  };

  const handleProfile = () => {
    navigation.navigate("Profile", route.params);
  };

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  width: "75%",
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  borderWidth: 2,
                  marginBottom: 5
                }}
                onPress={() =>
                  navigation.navigate("Order Details", {
                    item: item,
                    params: route.params,
                  })
                }
              >
                <Text style={styles.availableOrder}>
                  Order {item.id} ({item.location})
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <View style={{ flexDirection: "row", bottom: "5%", height: "9%" }}>
        <TouchableOpacity
          style={styles.IconBox}
          onPress={() =>
            navigation.navigate("Order", route.params, {
              UserFound: true,
            })
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

export const styles = StyleSheet.create({
  dashWrapper: {
    flexDirection: "row",
    flex: 1,
    marginBottom: "5%",
    alignItems: "center",
  },

  itemsTitleWrapper: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    justifyContent: "center",
    borderRadius: 15,
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
    paddingBottom: "3%",
    paddingTop: "3%",
    marginBottom: 3,
    color: "#800000",
    width: "100%",
    textAlign: "center",
    borderRadius: 15,
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
});

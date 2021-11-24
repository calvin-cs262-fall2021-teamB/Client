import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function CartScreen({ navigation, route }) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.itemsTitleWrapper}>
        {/*List Contents of Order */}
        <View style={globalStyles.orderLists}>
          <Text style={globalStyles.sectionTitle}>Items</Text>
          <FlatList
            data={route.params}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>{item.itemname}</Text>
              </View>
            )}
          />
        </View>
      </View>
      {/*Deliver Button */}
      <View style={styles.dashWrapper}>
        <TouchableOpacity style={globalStyles.input}>
          <Text style={styles.detailsText}>PlaceOrder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  dashWrapper: {
    flex: 1,
    marginTop: "125%",
    alignItems: "center",
    justifyContent: "center",
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
});

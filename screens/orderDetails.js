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
} from "react-native";
import { globalStyles } from "../styles/global";
import { useSafeAreaFrame } from "react-native-safe-area-context";

export default function OrderDetailsScreen({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Order ID: {route.params.id}</Text>
        <Text style={styles.title}>Name: {route.params.fname} {route.params.lname}</Text>
        <Text style={styles.title}>Location: {route.params.location}</Text>
        <Text style={styles.title}>Order Status: {route.params.status}</Text>
      </View>
      {/*Deliver Button */}
      <View style={styles.dashWrapper}>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.detailsText}>Deliver Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    margin: '5%'
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
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2%'
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
    marginLeft: '16%',
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
    marginTop: "3%",
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
  },
  dashWrapper: {
    flexDirection: "row",
    flex: 1,
    marginBottom: "5%",
    alignItems: "center",
  },
  detailsText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "bold",
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
});

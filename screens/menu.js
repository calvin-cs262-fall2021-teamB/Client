import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import BeverageMenu from "../components/beverageMenu";
import FoodMenu from "../components/foodMenu";

export default function MenuScreen({ navigation, route }) {
  const [foodData, setFoodData] = useState([]);
  const [beverageData, setBeverageData] = useState([]);

  const handleCart = () => {
    navigation.navigate("Cart", {foodData: foodData.concat(beverageData), userDetails: route.params})
  };


  return (
    <View style={styles.viewStyles}>
      <Text style={styles.mainText}>Build Your Order!</Text>
      <FoodMenu style={styles.foodMenu} setFoodData={setFoodData} />
      <BeverageMenu
        style={styles.beverageMenu}
        setBeverageData={setBeverageData}
      />
      <View style={styles.reviewContainer}>
        <TouchableOpacity
          style={styles.reviewButton}
          onPress={() => handleCart()}
        >
          <Text style={styles.reviewText}>Review Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
    width: "100%",
  },
  mainText: {
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: "3%",
    paddingLeft: "2%",
    maxHeight: "10%",
  },
  beverageMenu: {
    flex: 1,
    alignSelf: "center",
  },
  foodMenu: {
    flex: 1,
    alignSelf: "center",
  },
  reviewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bottom: "3%",
  },
  reviewButton: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000",
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    height: "30%",
  },
  reviewText: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
  },
});

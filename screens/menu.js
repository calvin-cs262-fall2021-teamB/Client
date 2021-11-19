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

export default function MenuScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [orderData, setData] = useState([]);

  const getOrders = async () => {
    try {
      const response = await fetch('https://still-crag-08186.herokuapp.com/drinks');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);
  const handleOrderDetails = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={globalStyles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          flexDirection={"row"}
          style={styles.availableOrderList}
          data={orderData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View style={globalStyles.container}>
              <TouchableOpacity style={styles.contentWrapper}>
                {/* will add item to 'cart' */}
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.imageContent}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.menuContent}>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.contentTextTitle}>{item.itemname} {item.description}</Text>
                      <Text style={styles.contentTextTitle2}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      {/*Bottom Box*/}
      <View style={styles.bottomWrapper}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.absIcon}>
            <Image source={require("../images/eat.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.absIcon}>
            <Image source={require("../images/drink.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.absIcon}
            onPress={() => handleOrderDetails()}
          >
            <Image source={require("../images/cart.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export const styles = StyleSheet.create({
  addWrapper2: {
    marginTop: "5%",
    alignSelf: "center",
    width: "85%",
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
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
});

import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";

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

export default function MenuScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [toggleCheckbox, setToggle] = useState(false);
  const [orderData, setData] = useState([]);

  const getOrders = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/drinks"
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

  const handleOrderDetails = () => {
    navigation.navigate("Cart");
  };

  const onChangeValue = (itemSelected, index) => {
    const newItemData = orderData.map((newItem) => {
      if (item.id == itemSelected.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
        selected: item.selected,
      };
    });
    setData(newItemData);
  };

  const onShowItemSelected = () => {
    const listSelected = orderData.filter((item) => item.selected == true);
    let contentAlert = "popping up";
    listSelected.forEach((item) => {
      contentAlert = contentAlert;
    });
    Alert.alert(contentAlert);
  };

  return (
    <View style={styles.itemList}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          flexDirection={"row"}
          data={orderData}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.singleItem}>
              <TouchableOpacity style={styles.contentWrapper}>
                {/* will add item to 'cart' */}
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.imageContent}
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View style={styles.menuContent}>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.itemName}>
                        {item.itemname} {item.description}
                      </Text>
                      <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                  </View>
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      checked={toggleCheckbox}
                    />
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
            onPress={() => onShowItemSelected()}
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
    height: 120,
    width: "97%",
    marginBottom: 7,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  checkboxContainer: {
    flex: 0,
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  singleItem: {
    display: "flex",
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  imageContent: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  itemList: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    marginTop: 15,
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
    flex: 0,
    height: "100%",
    width: "50%",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowRadius: 50,
  },

  itemName: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
  itemPrice: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
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
});

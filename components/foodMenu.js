import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function FoodMenu({ navigation, setFoodData }) {
  const [open, setOpen] = React.useState(false);
  const [orderData, setData] = React.useState([]);
  const [isLoading, setLoading] = useState(true);

  const getOrders = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/foods"
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

  const openList = () => setOpen(true);
  const closeList = () => {
    setOpen(false);
    const orderArray = orderData.filter((item) => item.selected);
    setFoodData(orderArray);
  };
  const onUpdateValue = (index, value) => {
    orderData[index].selected = value;
    return setData([...orderData]);
  };

  const renderItem = ({ item, index }) => (
    <ItemRenderer
      key={index}
      index={index}
      selected={item.selected}
      name={item.itemname}
      image={item.image}
      price={item.price}
      description={item.description}
      onUpdateValue={onUpdateValue}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bevMenu}>
        <TouchableOpacity onPress={openList}>
          <View style={styles.bevButton}>
            <Text style={styles.buttonText}>Food Menu</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.selectedItems}>Selected Foods</Text>
          {/* Displays Selected Items */}
          {orderData
            .filter((item) => item.selected)
            .map((item) => (
              <Text style={styles.selectedFood} key={item.id}>
                {item.itemname}
              </Text>
            ))}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open === true}
        onRequestClose={() => {
          Alert.alert("Menu has been closed.");
          setOpen(!open);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={closeList}
          style={styles.modalView}
        >
          <Text style={styles.selectText}>Select Food Items</Text>
          <View style={styles.menuContainer}>
            <FlatList
              data={orderData}
              renderItem={renderItem}
              keyExtractor={({ id }, index) => id.toString()}
              // keyboardShouldPersistTaps="always"
            />
          </View>
          <View style={styles.confirmWrapper}>
            <TouchableOpacity style={styles.confirmButton}>
              <Text>Confirm Items</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

// click plus
// select food-drink items from modals
//   - each item is either selected or not selected
// review order button displays only selected items
// button to create/place the order

const ItemRenderer = ({
  index,
  name,
  description,
  price,
  selected,
  onUpdateValue,
}) => (
  <View style={styles.modalItem}>
    <Text style={styles.modalTitle}>
      {name}: {price}
    </Text>
    <Switch
      value={selected}
      onValueChange={(value) => onUpdateValue(index, value)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "20%",
  },

  bevButton: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000",
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center",
  },

  bevMenu: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    padding: 15,
  },

  buttonText: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
  },

  confirmButton: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },

  confirmWrapper: {
    height: 75,
    bottom: "1%",
    paddingTop: 5,
    paddingBottom: 5,
  },

  menuContainer: {
    flex: 1,
    backgroundColor: "#FFD700",
    borderRadius: 25,
    marginBottom: 17,
    borderWidth: 1,
  },

  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 23.5,
    borderBottomWidth: 1,
    borderBottomColor: "#800000",
  },
  modalTitle: {
    textTransform: "capitalize",
    color: "black",
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    margin: "1%",
    marginTop: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectText: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedFood: {
    fontSize: 15,
  },
  selectedItems: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: "1%",
  },
});

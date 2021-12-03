import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Switch,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

export default function BeverageMenu({ navigation, setBeverageData }) {
  const [open, setOpen] = React.useState(false);
  const [orderData, setData] = React.useState([]);
  const [isLoading, setLoading] = useState(true);

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

  const openList = () => setOpen(true);
  const closeList = () => {
    setOpen(false);
    const orderArray = orderData.filter((item) => item.selected);
    setBeverageData(orderArray);
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
            <Text style={styles.buttonText}>Beverage Menu</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.selectedItems}>Selected Beverages</Text>
          {/* Displays Selected Items */}
          {orderData
            .filter((item) => item.selected)
            .map((item) => (
              <Text style={styles.selectedBeverages} key={item.id}>
                {item.itemname} - {item.description}
              </Text>
            ))}
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={open === true}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={closeList}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, marginTop: 250 }}>
            <View style={styles.listWrapper}>
              <View style={styles.listContainer}>
                <FlatList
                  data={orderData}
                  renderItem={renderItem}
                  keyExtractor={({ id }, index) => id.toString()}
                />
              </View>
            </View>
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
      {name} - {description}: {price}
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
  },

  bevButton: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000",
    backgroundColor: "#800000",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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

  listWrapper: {
    flex: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    elevation: 10,
    shadowRadius: 5,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#FFD700",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#800000",
  },
  modalTitle: {
    textTransform: "capitalize",
    color: "black",
    fontSize: 16,
  },
  selectedBeverages: {
    fontSize: 15,
  },
  selectedItems: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: "1%",
  },
});

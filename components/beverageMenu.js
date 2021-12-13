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
      <TouchableOpacity style={styles.IconBox} onPress={openList}>
        <Image
          style={styles.IconBox2}
          source={require("../images/drinskw.png")}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open === true}
        onRequestClose={() => {
          Alert.alert("Food Menu has been closed.");
          setOpen(!open);
        }}
      >
        <TouchableOpacity activeOpacity={1} style={styles.modalView}>
          <Text style={styles.selectText}>Select Drink Items</Text>
          <View style={styles.menuContainer}>
            <FlatList
              data={orderData}
              renderItem={renderItem}
              keyExtractor={({ id }, index) => id.toString()}
              keyboardShouldPersistTaps="always"
            />
          </View>
          <View style={styles.confirmWrapper}>
            <TouchableOpacity style={styles.confirmButton} onPress={closeList}>
              <Text style={styles.confirmText}>Confirm Items</Text>
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
  image,
  price,
  selected,
  onUpdateValue,
}) => (
  <View style={styles.modalItem}>
    <View style={styles.imageContainer}>
      <Image style={styles.bevImage} source={{ uri: image }}></Image>
    </View>
    <Text style={styles.modalTitle}>
      {name} ({description}): {price}
    </Text>
    <Switch
      value={selected}
      onValueChange={(value) => onUpdateValue(index, value)}
      style={{ marginRight: 5 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "20%",
  },

  IconBox: {
    width: "28%",
    backgroundColor: "#800000",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
  },
  IconBox2: {
    width: 25,
    height: 25,
    alignSelf: "center",
  },

  confirmButton: {
    flex: 1,
    backgroundColor: "#800000",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },

  confirmText: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 17,
  },

  confirmWrapper: {
    height: 75,
    bottom: "1%",
    paddingTop: 5,
    paddingBottom: 5,
  },

  bevImage: {
    height: "100%",
    width: "100%",
  },

  imageContainer: {
    height: "100%",
    width: "20%",
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    borderRightWidth: 1,
    marginLeft: -1,
  },

  menuContainer: {
    flex: 1,
    backgroundColor: "#FFD700",
    borderRadius: 0,
    marginBottom: 17,
    borderWidth: 1,
  },

  modalItem: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#800000",
  },
  modalTitle: {
    textTransform: "capitalize",
    color: "black",
    fontSize: 17,
  },
  modalView: {
    flex: 1,
    margin: "3%",
    marginTop: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
  selectText: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedBeverage: {
    fontSize: 15,
  },
  selectedItems: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: "1%",
  },
});

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
} from "react-native";

export default function BeverageMenu({ navigation, setItemData }) {
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

  const showArray = () => {
    const orderArray = orderData.filter((item) => item.selected);
    setItemData(orderArray);
    console.log(orderArray);
  };

  const openList = () => setOpen(true);
  const closeList = () => setOpen(false);
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
      description={item.description}
      onUpdateValue={onUpdateValue}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#FFF", padding: 16 }}>
        <TouchableOpacity onPress={openList}>
          <View style={{ padding: 16, borderWidth: 1, borderColor: "#000" }}>
            <Text>Select Items</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={showArray}>
          <View>
            <Text>Show Array</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text>Selected Items</Text>
          {/* Displays Selected Items */}
          {orderData
            .filter((item) => item.selected)
            .map((item) => (
              <Text key={item.id}>
                {item.itemname} - {item.description}
              </Text>
            ))}
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={open === true}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeList}
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
  selected,
  onUpdateValue,
}) => (
  <View style={styles.item}>
    <Text style={styles.title}>
      {name} - {description}
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
    backgroundColor: "#FFF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC55",
  },
  tabHeading: {
    padding: 20,
    flexDirection: "row",
  },
  title: {
    textTransform: "capitalize",
    color: "#000",
  },
});

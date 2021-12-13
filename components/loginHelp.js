import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginHelp({ navigation }) {
  const [open, setOpen] = React.useState(false);

  const openList = () => setOpen(true);
  const closeList = () => {
    setOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: "75%", marginTop: "-2%" }}>
        <TouchableOpacity style={styles.helpIcon} onPress={openList}>
          <Text style={styles.question}>?</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open === true}
        onRequestClose={() => {
          Alert.alert("Help popup has been closed.");
          setOpen(!open);
        }}
      >
        <Text>This is the Landing Screen</Text>
        <Text>{'\n'}View the menu by clicking on the different images across the center of the page</Text>
        <Text>{'\n'}Place your order by going to the cart</Text>
        <Text>
        {'\n'}View your profile details and current active orders by visiting the profile page from the bottom right
        </Text>
        <TouchableOpacity onPress={closeList}>
          <Text>Close Me</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "20%",
  },

  IconBox: {
    flex: 1,
    backgroundColor: "#800000",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
    width: "95%",
  },
  IconBox2: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },

  buttonText: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
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

  foodImage: {
    height: "100%",
    width: "100%",
  },

  imageContainer: {
    height: "99.9%",
    width: "35%",
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
    height: 83,
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
    fontSize: 18,
  },
  modalView: {
    flex: 1,
    margin: "-2%",
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
  selectedFood: {
    fontSize: 15,
  },
  selectedItems: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: "1%",
  },
  helpIcon: {
    borderStyle: "solid",
    borderRadius: 15,
    height: 30,
    width: 30,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5%",
    marginTop: "-3%",
  },
  question: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

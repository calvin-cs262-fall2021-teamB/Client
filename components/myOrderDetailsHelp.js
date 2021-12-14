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

export default function MyDetailsHelp({ navigation }) {
  const [open, setOpen] = React.useState(false);

  const openList = () => setOpen(true);
  const closeList = () => {
    setOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginLeft: "65%",
          marginTop: "-2%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.headerTitle}>My Order Details</Text>
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
        <View style={styles.modalView}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Help: My Order Details
          </Text>
          <Text style={{ fontSize: 18 }}>
            {"\n"}Here, you can view the details of your order.
          </Text>
          <Text style={{ fontSize: 18 }}>
            {"\n"}Your information is near the top of the screen.
          </Text>
          <Text style={{ fontSize: 18 }}>
            {"\n"}Scroll to see all items in the order.
          </Text>
          <Text style={{ fontSize: 18 }}>
            {"\n"}To go back, click the back arrow in the upper left hand corner
            of the screen.
          </Text>
          <Text style={{ fontSize: 18 }}>
            {"\n"}To close this help popup, click the "Close Help" button below.
          </Text>
          <Text style={{ fontSize: 18 }}>{"\n"}</Text>
          <Text style={{ fontSize: 18 }}>{"\n"}</Text>
          <TouchableOpacity style={styles.closeModal} onPress={closeList}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
              }}
            >
              Close Help
            </Text>
          </TouchableOpacity>
        </View>
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

  closeModal: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    backgroundColor: "#800000",
    alignSelf: "center",
    borderRadius: 15,
    marginTop: "10%",
    padding: 15,
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
    marginRight: "50%",
    marginTop: "-3%",
  },
  question: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "-133%",
  },
});

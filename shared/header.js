import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export default function Header({ navigation }) {
  return (
    <View>
      <Image
        style={headerStyles.headerImage}
        source={require("../images/calvin-removebg-preview.png")}
      />
      {/* <TouchableOpacity style={headerStyles.helpIcon}>
        <Text style={headerStyles.question}>?</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerImage: {
    height: 60,
    width: 140,
    bottom: "20%",
    left: "7%",
    alignItems: "center",
    justifyContent: "center",
  },
  helpIcon: {
    borderStyle: "solid",
    borderRadius: 15,
    height: 30,
    width: 30,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "200%",
  },
  question: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

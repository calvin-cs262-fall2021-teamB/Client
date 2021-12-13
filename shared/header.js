import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Header({ navigation }) {
  return (
    <View>
      <Image
        style={headerStyles.headerImage}
        source={require("../images/calvin-removebg-preview.png")}
      />
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
});

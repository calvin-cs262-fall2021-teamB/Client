import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function Header({ navigation }) {
  return (
    <View>
      <Image
        style={headerStyles.headerImage}
        source={require("../images/calvin-removebg-preview.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                <Text style={headerStyles.helpButton}>?</Text>
            </TouchableOpacity>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerImage: {
    height: 60,
    width: 140,
    top: '2%',
    bottom: "15%",
    left: "7%",
  },
  helpButton: {

  }
});

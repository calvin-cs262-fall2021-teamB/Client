import React, { useState } from "react";
import {
  Alert,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const handleNavigate = async () => {
    try {
      const response = await fetch(
        "https://still-crag-08186.herokuapp.com/users/" + UserID
      );
      const json = await response.json();
      navigation.navigate("OrderOptions", {UserFound: true, UserData: json});
    } catch (error) {
      navigation.navigate("OrderOptions", {UserFound: false, UserData: UserID});
    }
  };
  const handleSubmitLogin = () => {
    if (UserID.length === 7 && !isNaN(UserID)) {
      Alert.alert(
        "Confirm Your Entry!",
        "ID: " + UserID,
        [
          {
            text: "Cancel",
            onPress: () => { navigation.navigate("Login"); }
          },
          {
            text: "OK",
            onPress: () => { handleNavigate(); }
          }
        ]
      );
    }
    else if (UserID.length === 0) {
      Alert.alert(
        "Oops!",
        "Please enter your Calvin ID in the box above.",
        [
          {
            text: "OK",
            onPress: () => { navigation.navigate('Login'); }
          }
        ]
      );
    }
    else {
      Alert.alert(
        "Oops!",
        "Your Calvin ID is a 7 digit number. Please try again.",
        [
          {
            text: "OK",
            onPress: () => { navigation.navigate('Login'); }
          }
        ]
      );
    }
  };
  const [UserID, setUserID] = useState([]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={loginStyles.safeContainer}
    >
      <SafeAreaView style={loginStyles.safeContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loginStyles.inner}>

            <View style={loginStyles.titlebox}>
              <Text style={loginStyles.titlefont}>Knight Dash</Text>
              </View>
            <Image
              style={loginStyles.largeLogo}
              source={require("../images/knightrush.png")}
            />

            <TextInput style={loginStyles.loginMessage}
              placeholder='Enter your Calvin ID to Sign In'
              onChangeText={(text) => setUserID(text)}>
            </TextInput>
            <View style={{ margin: 7 }} />
            {/* <TouchableOpacity onPress={() => handleSubmitLogin()} style={loginStyles.buttonContainer}> */}
            <TouchableOpacity
              onPress={() => handleSubmitLogin()}
              style={loginStyles.buttonContainer}
            >
              <View style={loginStyles.submitContainer}>
                <Text style={loginStyles.text}>{"Sign in"}</Text>
              </View>
            </TouchableOpacity>
            <Image
              style={loginStyles.calvin}
              source={require("../images/calvin-removebg-preview.png")}
            />
            <View style={loginStyles.safeContainer} />
          </View>
          
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const loginStyles = StyleSheet.create({
  calvin:{
    height: '5%',
    width: '30%',
    marginTop: '5%',
    alignSelf: 'center'
  },
  titlebox: {
    marginTop: "8%",
    height: "20%",
    justifyContent: 'center',
  },
  titlefont:{
    fontSize: 38,
    fontWeight: "bold",
    color: '#800000',
    alignSelf: 'center'
  },
  largeLogo: {
    height: "50%",
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    marginBottom: '3%'


  },
  loginWrapper: {
    justifyContent: "flex-end",
  },
  keyboardContainer: {
    justifyContent: "flex-end",
  },

  subLogin: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18,
    color: "#333",
  },
  loginMessage: {
    height: 40,
    width: '80%',
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginBottom: '3%',
    backgroundColor: '#ffffff',
    fontSize: 18,
    color: "#333",
    padding: 10
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#800000",
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '6%'
  },
  submitContainer: {
    flex: 0,
    padding: 10,
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: "center",
  },
  safeContainer: {
    flex: 1,
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#f2cd00"
  },
});

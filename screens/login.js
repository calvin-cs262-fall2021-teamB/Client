import React from "react";
import {
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
  const handleSubmitLogin = () => {
    navigation.navigate("Food Screen");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={loginStyles.safeContainer}
    >
      <SafeAreaView style={loginStyles.safeContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loginStyles.inner}>
            <Image
              style={loginStyles.largeLogo}
              source={require("../images/ylw_logo.png")}
            />
            <Text style={loginStyles.login}>{"Login"}</Text>
            <Text style={loginStyles.loginMessage}>
              {"Please sign in with your Calvin email"}
            </Text>
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
            <View style={loginStyles.safeContainer} />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const loginStyles = StyleSheet.create({
  largeLogo: {
    height: "40%",
    width: "77%",
    alignSelf: "center",
    marginTop: "25%",
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "#800000",
  },
  loginWrapper: {
    justifyContent: "flex-end",
  },
  keyboardContainer: {
    justifyContent: "flex-end",
  },
  login: {
    marginTop: "20%",
    marginBottom: "3%",
    fontSize: 35,
    color: "#333",
  },
  subLogin: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18,
    color: "#333",
  },
  loginMessage: {
    marginLeft: 10,
    marginBottom: 15,
    fontSize: 18,
    color: "#333",
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
  },
  submitContainer: {
    flex: 0,
    padding: 10,
    marginTop: "3%",
    marginBottom: "3%",
    justifyContent: "center",
  },
  safeContainer: {
    flex: 1,
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
});
//<View style={styles.container}>
//       <Text>Get ready to login to Azure</Text>
//       <View style={styles.button}>
//         <Button
//           onPress={() => navigation.navigate("SignIn")}
//           title="Sign In"
//           style={styles.title}
//           color={buttonColour}
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//       <StatusBar style="auto" />
//     </View>

import React from 'react';
import { StyleSheet, TouchableWithoutFeedback,Keyboard,View, SafeAreaView, KeyboardAvoidingView, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, PoiretOne_400Regular  } from '@expo-google-fonts/poiret-one';

export default function HomeScreen({ navigation }) {

    let [fontsLoaded] = useFonts({
        PoiretOne_400Regular ,
      });

    const handleSubmitLogin = () => {
        navigation.navigate('OrderOptions')
    }
    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={loginStyles.safeContainer}
            >   
            <SafeAreaView style={loginStyles.safeContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={loginStyles.inner}>
                        <Text style ={loginStyles.titleText}>
                        {'KNIGHT DASH'}
                        </Text>
                        <Image
                            style={loginStyles.largeLogo}
                            source={require('../images/design1.png')}
                        /> 
                        <View style={{margin:3}} />
                        {/* <TouchableOpacity onPress={() => handleSubmitLogin()} style={loginStyles.buttonContainer}> */}
                        <TouchableOpacity onPress={() => handleSubmitLogin()} style={loginStyles.buttonContainer}>
                            <View style={loginStyles.submitContainer}>
                                <Text 
                                    style={loginStyles.text}> 
                                    {'Sign in'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Image style={loginStyles.CalvinLogo}
                               source={require('../images/calvin-removebg-preview.png')}
                        />
                        <View style={loginStyles.safeContainer} />
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>
);
}

const loginStyles = StyleSheet.create({
    largeLogo:{
        height: 400,
        width: 373, 
        alignSelf: 'center', 
        marginLeft: 15,
        marginTop: 70,
    },
    CalvinLogo:{
        height: 72,
        width: 179,
        marginTop: 3,
        marginBottom: 20,
        alignSelf: 'center', 
    },
    loginWrapper:{
        justifyContent: "flex-end",
    },
    keyboardContainer:{
        justifyContent: "flex-end",
    },
    subLogin:{
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 18,
        color: '#333',
    },
    loginMessage:{
        marginLeft: 10,
        marginBottom: 15,
        fontSize: 18,
        color: '#333',
    },  
    text:{
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    titleText:{
        marginTop: '20%',
        fontSize: 42, 
        alignSelf: 'center',
        color: '#800000',
        fontFamily: 'PoiretOne_400Regular',


        
    },
    buttonContainer:{
        height: 39,
        width: 116,
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: "#800000",
        borderRadius: 10,
    },
    submitContainer:{
        flex: 0,
        padding: 5,
        justifyContent: 'center'
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
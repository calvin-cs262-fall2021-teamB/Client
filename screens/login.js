import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback,Keyboard,View, SafeAreaView, KeyboardAvoidingView, ScrollView, TextInput, Button, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';


export default function HomeScreen({ navigation }) {
    const handleSubmitLogin = () => {
        navigation.navigate('OrderOptions')
    }
    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={globalStyles.safeContainer}
            >   
            <SafeAreaView style={globalStyles.safeContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.inner}>
                        <Image
                            style={globalStyles.largeLogo}
                            source={require('../images/ylw_logo.png')}
                        /> 
                         <Text 
                            style={globalStyles.login}>
                            {'Login'}
                        </Text>
                        <Text style={globalStyles.loginMessage}>
                            {'Please sign in with your Calvin email'}
                        </Text>
                        <View style={{margin:7}} />
                        <TouchableOpacity onPress={() => handleSubmitLogin()} style={globalStyles.buttonContainer}>
                            <View style={globalStyles.submitContainer}>
                                <Text 
                                    style={globalStyles.text}> 
                                    {'Sign in'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={globalStyles.safeContainer} />
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>
);
}

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
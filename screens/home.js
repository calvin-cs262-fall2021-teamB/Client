import React, { useState } from 'react';
import { View, ScrollView, TextInput, Button, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    const handleSubmitLogin = () => {

    }
    return (
        <View style={globalStyles.homeContainer}>
            <Image
                style={globalStyles.largeLogo}
                source={require('../images/ylw_logo.png')}
            />           
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={globalStyles.login}>
                    {'Login'}
                </Text>
                <Text style={globalStyles.loginMessage}>
                    {'Please sign in with your Calvin email'}
                </Text>
                <TextInput style={globalStyles.subLogin} placeholder='Username' />
                <TextInput style={globalStyles.subLogin} placeholder='Password' />
                <View style={{margin:7}} />
                <TouchableOpacity onPress={() => handleSubmitLogin()} style={globalStyles.buttonContainer}>
                    <View style={globalStyles.container}>
                        <Text 
                            style={globalStyles.text}> 
                            {'Submit'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View> 
    );
  }

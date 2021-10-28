import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function deliverlist({ route, navigation}) {

    return (
        <View style = {{ DeliverListTitle }}>
            <Text>'Available Orders'</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    DeliverListTitle: {
        position: 'absolute',
        top: 90,
        paddingTop: 80,
        
    }
})
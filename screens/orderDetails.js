import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import {globalStyles} from '../styles/global';

export default function OrderDetailsScreen() {

    return (
        <View style={globalStyles.container}>
            <View style={ globalStyles.dashWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={globalStyles.chooseOrderText}>Dash</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import {globalStyles} from '../styles/global';

export default function OrderDetailsScreen() {

    return (
        <View style={globalStyles.container}>
            <View style={ globalStyles.itemsTitleWrapper }>
                {/*List Contents of Order */}
                <View style={ globalStyles.myOrders}>
                    <Text style={ globalStyles.sectionTitle}>Items</Text>
                    <View style={ globalStyles.items }>
                        <Text> {/*Data Goes Here */} </Text>
                    </View>
                </View>
            </View>
            {/*Deliver Button */}
            <View style={ globalStyles.dashWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={globalStyles.chooseOrderText}>Dash</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import {globalStyles} from '../styles/global';

export default function OrderOptionsScreen() {
    const [order, setOrder] = useState();
    const [orderItems, setOrderItems] = useState([]);

    const handleAddOrder = () => {
        Keyboard.dismiss();
        setOrderItems([...orderItems, order]);
        setOrder(null);
    }

    const completeOrder = (index) => {
        let itemsCopy = [...orderItems];
        itemsCopy.splice(index, 1);
        setOrderItems(itemsCopy);
    }
    return (
        <View style={globalStyles.container}>

            {/* Current Orders */}
            <View style={globalStyles.OrdersWrapper}>
                <Text style={globalStyles.sectionTitle}>Current Orders</Text>

                <View style={globalStyles.items}>
                {/* This is where the orders will go */}
                {
                    orderItems.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => completeOrder(index)}>
                            <Order text={item} />
                        </TouchableOpacity>
                    )
                    })
                }
                </View>
            </View>
        
            {/* Write a Order */}
            <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
            style={ globalStyles.writeOrderWrapper }>

                <TextInput style={ globalStyles.input } placeholder={'Place an Order'} value={order} onChangeText={text=>setOrder(text)}/>
                <TouchableOpacity onPress={() => handleAddOrder()}>
                    <View style={ globalStyles.addWrapper }>
                        <Text style={globalStyles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}
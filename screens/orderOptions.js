import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import {globalStyles} from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';

export default function OrderOptionsScreen({navigation}) {
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

    const handleOrderChoice = () => {
        navigation.navigate('OrderMenus')
    }
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.OrdersWrapper}>
                {/* My Orders */}
                <View style={globalStyles.myOrders}>
                    <Text style={globalStyles.sectionTitle}>My Orders</Text>
                    <KeyboardAvoidingView 
                        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <TouchableOpacity onPress={() => handleAddOrder()}>
                            <View style={ globalStyles.addWrapper }>
                                <TextInput style={globalStyles.addText} placeholder='New Order' value={order} onChangeText={text=>setOrder(text)}></TextInput>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>

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

                {/* Available Orders */}
                <Text style={globalStyles.sectionTitle}>Available Orders</Text>
            </View>
        
            {/* Choose an Order */}
            <View style={ globalStyles.chooseOrderWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={globalStyles.chooseOrderText}>Choose an Order</Text>
                </TouchableOpacity>
            </View>
            {/* created for now, delete afterwards */}
            <View style={ globalStyles.chooseOrderWrapper2 }>
                <TouchableOpacity onPress={() => handleOrderChoice()} style={ globalStyles.input }>
                    <Text style={globalStyles.chooseOrderText}>Create an Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
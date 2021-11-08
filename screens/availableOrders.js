import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, FlatList, } from 'react-native';
import {globalStyles} from '../styles/global';

export default function AvailableOrdersScreen() {
  const orderData = require('../test-data/mock-data.json');

    return (
        <View style={globalStyles.container}>
            <View style={ styles.itemsTitleWrapper }>
                {/*List Contents of Order */}
                <View style={ globalStyles.orderLists}>
                    <Text style={ globalStyles.sectionTitle}>Orders</Text>
                    
                </View>
                      <FlatList
                        style={styles.availableOrderList}
                        data={orderData.orders}
                        keyExtractor={({ orderNumber }, index) => orderNumber}
                        renderItem={({ item }) => (
                                <Text style={styles.availableOrder}>Order {item.orderNumber}, {item.destination}, {item.customerName}</Text>
                            )}
                      />
            </View>
            {/*Deliver Button */}
            <View style={ styles.dashWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={styles.detailsText}>Choose Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
  dashWrapper: {
    flex: 1,
    marginTop: '65%',
    alignItems: 'center',
  },

  itemsTitleWrapper: {
    paddingHorizontal: '10%',
    paddingVertical: '10%',
    justifyContent: 'center',
  },
  detailsText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFD700',
    fontSize: 17,
    fontWeight: 'bold'
  },
  availableOrder: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '5%',
    marginLeft: '5%',
    color: '#800000'
},
availableOrderList: {
  top: '1%'
}
});
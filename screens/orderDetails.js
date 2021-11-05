import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import {globalStyles} from '../styles/global';

export default function OrderDetailsScreen() {

    return (
        <View style={globalStyles.container}>
            <View style={ styles.itemsTitleWrapper }>
                {/*List Contents of Order */}
                <View style={ globalStyles.orderLists}>
                    <Text style={ globalStyles.sectionTitle}>Items</Text>
                    <View style={ globalStyles.items }>
                        <Text> {/*Data Goes Here */} </Text>
                    </View>
                </View>
            </View>
            {/*Deliver Button */}
            <View style={ styles.dashWrapper }>
                <TouchableOpacity style={ globalStyles.input }>
                    <Text style={styles.detailsText}>Dash</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
  dashWrapper: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center'
  },

  itemsTitleWrapper: {
    paddingHorizontal: '10%',
    paddingVertical: '10%'
  },
  detailsText: {
      color: 'white',
  },
});
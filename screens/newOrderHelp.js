import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function loginHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>- To place an order{'\n'}</Text>
            <Text>      1. From the Order Options page, press the yellow "+" button in the right-hand corner of the screen{'\n'}</Text>

        </View>
    );
}
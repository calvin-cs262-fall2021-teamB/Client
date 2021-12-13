import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function viewProfileHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>- To view your profile page, select the "p" button{'\n'}</Text>
        </View>
    );
}
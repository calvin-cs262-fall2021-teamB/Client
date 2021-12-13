import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function refreshPageHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>- To refresh the page, select the "r" button{'\n'}</Text>
        </View>
    );
}
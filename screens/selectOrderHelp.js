import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function selectOrderHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>-To select an order to deliver{'\n'}</Text>
            <Text>      1. From the Order Options page, under the Available Orders section, the most recently place orders will be displayed{'\n'}</Text>
            <Text>      2. To view details of an order, press the individual order name{'\n'}</Text>
            <Text>      3. Alternatively, select View All to see an expanded list of orders{'\n'}</Text>
        </View>
    );
}
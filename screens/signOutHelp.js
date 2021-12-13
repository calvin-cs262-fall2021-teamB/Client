import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function signOutHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>- To sign out, select the Sign Out button toward the bottom of the Order Options page{'\n'}</Text>
        </View>
    );
}
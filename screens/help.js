import React from 'react';
import { View, Text } from 'react-native';

export default function HelpScreen({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>This application lists movies and movie reviews.</Text>
        </View>
    );
}
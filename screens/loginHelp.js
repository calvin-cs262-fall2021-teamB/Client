import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function loginHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>- A Calvin ID is required to use Knightdash{'\n'}</Text>
            <Text>-	The first screen you will see when you open Knightdash is the login screen.{'\n'}</Text>
            <Text>To Login:{'\n'}</Text>
            <Text>      1. Enter your Calvin ID #{'\n'}</Text>
            <Text>      2. Press the Sign In button towards the bottom of the screen{'\n'}</Text>
            <Text>      3. Enter your Calvin email (abc123@calvin.edu) and press Next{'\n'}</Text>
            <Text>      4. Enter your Calvin password then press Sign In{'\n'}</Text>
            <Text>      5. Complete the DUO Two-step verification if needed.{'\n'}</Text>
        </View>
    );
}
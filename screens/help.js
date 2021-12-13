import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HelpScreen({ navigation }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <TouchableOpacity onPress={() => navigation.navigate('Login Help')}>
                <Text>1. Logging in{'\n'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('New Order Help')}>
                <Text>2. Create a new order{'\n'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Add Items Help')}>
                <Text>3. Add Items to your order{'\n'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Select Order Help')}>
                <Text>4. Select an order to deliver{'\n'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Out Help')}>
                <Text>5. Signing Out{'\n'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Refresh Page Help')}>
                <Text>6. Refreshing the page{'\n'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('View Profile Help')}>
                <Text>7. View your profile</Text>
            </TouchableOpacity>
        </View>
    );
}
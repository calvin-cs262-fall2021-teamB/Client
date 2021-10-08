import React from 'react';
import {  Image, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';


export default function Header({ navigation }) {
    return (
        <View>
            <View style={globalStyles.container}>
                <Image
                    style={globalStyles.tinyLogo}
                    source={require('../images/calvin-removebg-preview.png')}
                />
            </View>
        </View>
    );
};
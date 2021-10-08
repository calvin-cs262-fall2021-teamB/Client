import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text>{'This application lists movies and movie reviews'}</Text>
        </View>
    );
  }
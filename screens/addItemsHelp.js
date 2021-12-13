import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function addItemsHelp({  }) {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Display the fields of the received movie object. */}
            <Text>- To add food or beverage to the order:{'\n'}</Text>
            <Text>      1. To add food, press the Food Menu button{'\n'}</Text>
            <Text>      2. A pop-up will appear, select the desired items by pressing the slider next to the food item{'\n'}</Text>
            <Text>      3. To exit the pop-up menu, tap anywhere on the screen except for the slider bars{'\n'}</Text>
            <Text>      4. To add beverage, complete steps 1-3 with the Beverage Menu selected{'\n'}</Text>
            <Text>      5. When your order is complete, select the Review Order button to move to the next step{'\n'}</Text>
            <Text>      6. On the Review Order screen, if your order is correct, select Place Order{'\n'}</Text>
        </View>
    );
}
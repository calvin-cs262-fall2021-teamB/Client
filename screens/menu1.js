import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from '../components/Order';
import {globalStyles} from '../styles/global';

export default function MenuScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>

            <View style={globalStyles.addWrapper2}>
            {/*contents*/}
                {/*content1*/}
                <TouchableOpacity style= {globalStyles.contentWrapper}>   
                {/*will add item to 'cart'*/}               
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={globalStyles.imageContent}
                                source={require('../images/pepsi.jpg')}
                            /> 

                        <View style={globalStyles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={globalStyles.contentTextTitle}>Pepsi</Text>
                            <Text style={globalStyles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>

                {/*content2*/}
                <TouchableOpacity style= {globalStyles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={globalStyles.imageContent}
                                source={require('../images/Cherry.jpg')}
                            /> 

                        <View style={globalStyles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={globalStyles.contentTextTitle}>Cherry Pepsi</Text>
                            <Text style={globalStyles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>  

                {/*content3*/}
                <TouchableOpacity style= {globalStyles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={globalStyles.imageContent}
                                source={require('../images/DietPepsi.png')}
                            /> 

                        <View style={globalStyles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={globalStyles.contentTextTitle}>Diet Pepsi</Text>
                            <Text style={globalStyles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>

                {/*content4*/}
                <TouchableOpacity style= {globalStyles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={globalStyles.imageContent}
                                source={require('../images/zero.png')}
                            /> 

                        <View style={globalStyles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={globalStyles.contentTextTitle}>Zero Pepsi</Text>
                            <Text style={globalStyles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>
                {/*content5*/}
                <TouchableOpacity style= {globalStyles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={globalStyles.imageContent}
                                source={require('../images/DietCherry.jpg')}
                            /> 

                        <View style={globalStyles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={globalStyles.contentTextTitle}>Diet Cherry Pepsi</Text>
                            <Text style={globalStyles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity >  

                {/*This will add button to move next page*/}
                <TouchableOpacity style= {globalStyles.numberButton}> 
                    <Text style = {globalStyles.NumberText}>1</Text>
                </TouchableOpacity>
            
            </View>

            {/*Bottom Box*/}
            <View style={globalStyles.bottomWrapper}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style = {globalStyles.absIcon}>
                        <Image
                                    source={require('../images/eat.png')}
                        />                     
                    </TouchableOpacity>
                    <TouchableOpacity style = {globalStyles.absIcon}>
                        <Image
                                    source={require('../images/drink.png')}
                        />                     
                    </TouchableOpacity>
                    <TouchableOpacity style = {globalStyles.absIcon}>
                        <Image
                                    source={require('../images/cart.png')}
                        />                     
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

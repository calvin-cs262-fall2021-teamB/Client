import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {globalStyles} from '../styles/global';

export default function MenuScreen({ navigation }) {
    return (
        <View style={globalStyles.container}>

            <View style={styles.addWrapper2}>
            {/*contents*/}
                {/*content1*/}
                <TouchableOpacity style= {styles.contentWrapper}>   
                {/*will add item to 'cart'*/}               
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={styles.imageContent}
                                source={require('../images/pepsi.jpg')}
                            /> 

                        <View style={styles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.contentTextTitle}>Pepsi</Text>
                            <Text style={styles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>

                {/*content2*/}
                <TouchableOpacity style= {styles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={styles.imageContent}
                                source={require('../images/Cherry.jpg')}
                            /> 

                        <View style={styles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.contentTextTitle}>Cherry Pepsi</Text>
                            <Text style={styles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>  

                {/*content3*/}
                <TouchableOpacity style= {styles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={styles.imageContent}
                                source={require('../images/DietPepsi.png')}
                            /> 

                        <View style={styles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.contentTextTitle}>Diet Pepsi</Text>
                            <Text style={styles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>

                {/*content4*/}
                <TouchableOpacity style= {styles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={styles.imageContent}
                                source={require('../images/zero.png')}
                            /> 

                        <View style={styles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.contentTextTitle}>Zero Pepsi</Text>
                            <Text style={styles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity>
                {/*content5*/}
                <TouchableOpacity style= {styles.contentWrapper}>  
                {/*will add item to 'cart'*/}                     
                    <View style={{flexDirection:'row'}}>
                        <Image
                                style={styles.imageContent}
                                source={require('../images/DietCherry.jpg')}
                            /> 

                        <View style={styles.menuContent}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.contentTextTitle}>Diet Cherry Pepsi</Text>
                            <Text style={styles.contentTextTitle2}> 1.75$ </Text>
                        </View>   
                        </View>
                    </View>
                </TouchableOpacity >  

                {/*This will add button to move next page*/}
                <TouchableOpacity style= {styles.numberButton}> 
                    <Text style = {styles.NumberText}>1</Text>
                </TouchableOpacity>
            
            </View>

            {/*Bottom Box*/}
            <View style={styles.bottomWrapper}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style = {styles.absIcon}>
                        <Image
                                    source={require('../images/eat.png')}
                        />                     
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.absIcon}>
                        <Image
                                    source={require('../images/drink.png')}
                        />                     
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.absIcon}>
                        <Image
                                    source={require('../images/cart.png')}
                        />                     
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    chooseOrderWrapper2: {
        alignItems: 'center',
        paddingVertical: '1%',
  },

  input2: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#800000',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 226,
    height: 47,
  },

  addWrapper2: {
    marginTop: '5%',
    alignSelf:"center",
    width:350,
    height:610,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
  },

  contentWrapper:{
    marginLeft: 5,
    marginTop: 5,
    height:110,
    width: 340,
    borderRadius: 10,
    backgroundColor: '#FFFFFF'

  },
  imageContent: {
    marginLeft: 5,
    marginTop: 5,
    height: 100,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000000",
    shadowRadius: 50
  },
  
  bottomWrapper: {
    marginTop: '5%',
    alignSelf:"center",
    width:350,
    height:50,
    backgroundColor: '#C4C4C4',
    borderRadius: 25
  },

  menuContent: {
    marginLeft: 10,
    marginTop: 5,
    height: 100,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000000",
    shadowRadius: 50
  },

  contentTextTitle:{
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold", 
  },
  contentTextTitle2:{
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
  },
  numberButton:{
    marginTop: 5,
    alignSelf: 'center',
    width: 25,
    height: 25,
    borderRadius: 25/2,
    backgroundColor: "#9a9a9a"
  },
  absIcon:{
    marginTop: 1,
    marginLeft: 58,
    width: 35,
    height: 35,
    borderRadius: 35/2,
    backgroundColor: "#C4C4C4"
  },
  NumberText:{
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold"
  }
});
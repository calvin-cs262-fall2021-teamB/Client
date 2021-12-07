import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import OrderDetailsScreen from "./orderDetails";


export default function ChrisOrderScreen({ navigation }) {
    const handleFood= () => {
        navigation.navigate("Food Screen");
      };
    const handleDrink= () => {
        navigation.navigate("Drink Screen");
      };
      
    return (
        <View style={globalStyles.container}>
            <View style={styles.utilityContainer}>
                <TouchableOpacity style={styles.utilityWrapper}>
                   <Image
                        style={styles.IconBox3} 
                        source={require("../images/arrow.png")}
                        />
                </TouchableOpacity>
                <TouchableOpacity style={styles.utilityWrapper2}>
                <Image
                        style={styles.IconBox3} 
                        source={require("../images/basket.png")}
                        />

                </TouchableOpacity>

            </View>
            <Text style={styles.TitleFont}>order</Text>
            <Text style={styles.TitleDescription}>what would you like to order?</Text>

            <View style={styles.BottomWrapper}>
                <View style={styles.IconWrapper1}>
                    <TouchableOpacity
                    style={styles.IconBox}
                    onPress={handleFood}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/foodw.png")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    style={styles.IconBox}
                    onPress={handleDrink}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/drinskw.png")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.IconBox}
                    onPress={handleFood}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/candy.png")}
                        />
                    </TouchableOpacity>
                </View>


                <View style ={styles.PictureWrap}>
                        <Image
                        style={styles.Picture}
                        source={require("../images/foody.png")
                    }/>
                        <Text style={styles.PictureText}>Please</Text>
                        <Text style={styles.PictureText2}>choose one of the options above</Text>
                </View>
                

                
            </View>



        </View>
    );


}


export const styles = StyleSheet.create({
    container: {
        height: "40%",
        width: "90%",
        marginTop: "12%",
        marginHorizontal: "5%",
      },
      
      utilityContainer:{
        marginTop:"10%",
        width: "90%",
        alignSelf: "center",
        height: "4%",
        flexDirection: "row",
        justifyContent: 'space-between'
      },

      TitleFont:{
        fontSize: 32,
        fontWeight: "bold", 
        marginTop: "3%",
        marginHorizontal: "5%"
      },

      TitleDescription:{
        fontSize: 12,
        fontWeight: "bold",
        marginTop: "-2%",
        marginHorizontal: "5%"
      },

      PictureWrap:{
          flex: 1,
          width: "90%",
          marginTop: "3%",
          margin: "15%",
          alignSelf: "center",
          borderRadius: 20,
          backgroundColor: "#800000",
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
      },

      Picture:{
          flex: 1,
          width: "100%",
          borderRadius: 10,
          resizeMode: "stretch",
          alignSelf: "center",
      },

      PictureText:{
          fontSize: 24,
          position: "absolute",
          fontWeight: "bold",
          color: "#ffffff",
          marginVertical: "121%",
          marginLeft: "2%"    
      },
      PictureText2:{
        fontSize: 12,
        position: "absolute",
        fontWeight: "bold",
        color: "#ffffff",
        marginVertical: "129%",
        marginLeft: "2%"    
    },


      BottomWrapper:{
        flex: 1,
        marginTop: "3%",
        backgroundColor: "#ffffff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },

      IconWrapper1:{
          marginTop:"3%",
          width: "90%",
          alignSelf: "center",
          height: "8%",
          flexDirection: "row",
          justifyContent: "space-between"
      },

      IconBox:{
          width: "28%",
          backgroundColor: "#800000",
          borderRadius: 20,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 3,
          justifyContent: "center",
      },
      IconBox2:{
          width: 25,
          height: 25,
          alignSelf: "center",
      },

      IconBox3:{
        width: 30,
        height: 30,
        alignSelf: "center",
    },

      utilityWrapper:{
        width: "10%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        justifyContent: "center",
    },

    utilityWrapper2:{
        width: "12%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
    },

      ContentWrappers:{
          width: "90%",
          height: "60%",
          alignSelf: "center",
          marginTop: "3%",

      },
      CartButton:{
          width: "30%",
          height: "8%",
          backgroundColor: "#800000",
          alignSelf: "center",
          marginTop: "3%",
          borderRadius: 30,
          justifyContent: "center"
      }
    
  });
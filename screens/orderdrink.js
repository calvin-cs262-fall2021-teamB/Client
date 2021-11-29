import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import OrderDetailsScreen from "./orderDetails";


export default function ChrisOrderScreen2({ navigation }) {
    const handleSubmitLogin = () => {
        navigation.navigate("Food Screen");
      };
    return (
        <View style={globalStyles.container}>
            <Text style={styles.TitleFont}>order</Text>
            <Text style={styles.TitleDescription}>what would you like to order?</Text>

            <View style={styles.BottomWrapper}>
                <View style={styles.IconWrapper1}>
                    <TouchableOpacity
                    style={styles.UsedIconBox}
                    onPress={handleSubmitLogin}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/foodw.png")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    style={styles.IconBox}
                    onPress={handleSubmitLogin}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/drinks.png")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.IconBox}
                    onPress={handleSubmitLogin}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/dots.png")}
                        />
                    </TouchableOpacity>
            
                </View>
                
                <View style={styles.ContentWrappers}>

                </View>

                <TouchableOpacity
                    style={styles.CartButton}
                    onPress={handleSubmitLogin}
                    >
                        <Image
                        style={styles.IconBox2} 
                        source={require("../images/cart.png")}
                        />
                </TouchableOpacity>
                
            </View>



            <View style={styles.PictureWrap}>
                <Image
                        style={styles.Picture}
                        source={require("../images/drink.jpg")}
                        />
                <Text style={styles.PictureText}>foods</Text>
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

      TitleFont:{
        fontSize: 36,
        fontWeight: "bold", 
        marginTop: "10%",
        marginHorizontal: "5%"
      },

      TitleDescription:{
        fontSize: 12,
        fontWeight: "bold",
        marginTop: "-2%",
        marginHorizontal: "5%"
      },

      PictureWrap:{
          height: "18%",
          width: "90%",
          marginTop: "28%",
          alignSelf: "center",
          position: "absolute",
          borderRadius: 10,
          backgroundColor: "#ffffff",
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.9,
          shadowRadius: 3,
          elevation: 5,
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
          marginVertical: "32%",
          marginLeft: "2%"    
      },

      BottomWrapper:{
        flex: 1,
        marginTop: "35%",
        backgroundColor: "#ffffff",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      },

      IconWrapper1:{
          marginTop:"10%",
          width: "90%",
          alignSelf: "center",
          height: "8%",
          flexDirection: "row",
          justifyContent: "space-between"
      },
      UsedIconBox:{
        width: "30%",
        backgroundColor: "#800000",
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
        justifyContent: "center",
    },
      IconBox:{
          width: "30%",
          backgroundColor: "#f2cd00",
          borderRadius: 10,
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
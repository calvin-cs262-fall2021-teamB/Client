import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: '#B0ADAD',
    backgroundColor: '#E5E5E5',
  },
  OrdersWrapper: {
    flex: 1,
    paddingVertical: '15%',
    paddingHorizontal: '5%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  chooseOrderWrapper: {
    alignItems: 'center',
    paddingVertical: '12%',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#800000',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 226,
    height: 47,
  },
  addWrapper: {
    width: 100,
    height: 37,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontWeight: 'bold',
  },
  myOrders: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  chooseOrderText: {
    textAlign: 'center',
    color: 'white',
  },
  //header styles
  loginContainer:{
    flex: 1,
    padding: 2,
  },
  tinyLogo:{
    width: 135,
    height: 65
  },
  //login styles
  largeLogo:{
    height: 275,
    width: 275, 
    alignSelf: 'center', 
    borderRadius: 200,
    marginTop: '10%'
  },
  loginWrapper:{
    justifyContent: "flex-end",
  },
  keyboardContainer:{
    justifyContent: "flex-end",
  },
  login:{
    marginTop: 40,
    marginBottom: 5,
    // marginLeft: 20,
    fontSize: 35,
    // fontWeight: 'bold',
    color: '#333',
  },
  subLogin:{
      marginLeft: 10,
      marginBottom: 10,
      fontSize: 18,
      color: '#333',
  },
  loginMessage:{
      marginLeft: 10,
      marginBottom: 15,
      fontSize: 18,
      color: '#333',
  },  
  text:{
      fontSize: 18,
      alignSelf: 'center',
      fontWeight: 'bold',
      color: 'white',
  },
  buttonContainer:{
      // marginTop: 5,
      elevation: 8,
      backgroundColor: "#800000",
      borderRadius: 10,
      // paddingVertical: 1,
      // paddingHorizontal: 12
  },
  submitContainer:{
    flex: 1,
    padding: 10,
    marginTop: 15,
    marginBottom: 15, 
    justifyContent: 'center'
  },
  safeContainer: {
    flex: 1,
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
});

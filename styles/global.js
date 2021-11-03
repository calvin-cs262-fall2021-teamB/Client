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
  chooseOrderWrapper2: {
    alignItems: 'center',
    paddingVertical: '1%',
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
  addWrapper2: {
    marginTop: '5%',
    alignSelf:"center",
    width:350,
    height:610,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
  },
  bottomWrapper: {
    marginTop: '5%',
    alignSelf:"center",
    width:350,
    height:50,
    backgroundColor: '#C4C4C4',
    borderRadius: 25
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

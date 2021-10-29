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
  
});

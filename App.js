import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Order from './components/Order';

export default function App() {
  const [order, setOrder] = useState();
  const [orderItems, setOrderItems] = useState([]);

  const handleAddOrder = () => {
    Keyboard.dismiss();
    setOrderItems([...orderItems, order]);
    setOrder(null);
  }

  const completeOrder = (index) => {
    let itemsCopy = [...orderItems];
    itemsCopy.splice(index, 1);
    setOrderItems(itemsCopy);
  }
  return (
    <View style={styles.container}>

    {/* Current Orders */}
      <View style={styles.OrdersWrapper}>
        <Text style={styles.sectionTitle}>Current Orders</Text>

        <View style={styles.items}>
          {/* This is where the orders will go */}
          {
            orderItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeOrder(index)}>
                  <Order text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    
    {/* Write a Order */}
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
      style={ styles.writeOrderWrapper }>

        <TextInput style={ styles.input } placeholder={'Place an Order'} value={order} onChangeText={text=>setOrder(text)}/>
        <TouchableOpacity onPress={() => handleAddOrder()}>
          <View style={ styles.addWrapper }>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: '#E8EAED',
  },
  OrdersWrapper: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeOrderWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 70,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontWeight: 'bold'
  },
});

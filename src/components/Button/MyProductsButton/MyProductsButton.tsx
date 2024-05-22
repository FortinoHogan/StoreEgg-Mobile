import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyProductsButton = () => {
return (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>My Products &gt;</Text>
  </TouchableOpacity>
);
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'black',
  }
});

export default MyProductsButton;
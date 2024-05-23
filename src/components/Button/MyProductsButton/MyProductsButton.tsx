import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const MyProductsButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => nav.navigate('MyProducts' as never)}>
      <Text style={styles.buttonText}>My Products &gt;</Text>
    </TouchableOpacity>
  );
};
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
  },
});

export default MyProductsButton;

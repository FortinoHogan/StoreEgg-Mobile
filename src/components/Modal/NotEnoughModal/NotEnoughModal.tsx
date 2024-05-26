import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {INotEnoughModal} from './INotEnoughModal';
import { useNavigation } from '@react-navigation/native';

const NotEnoughModal = (props: INotEnoughModal) => {
  const {visible, onClose} = props;
  const nav = useNavigation();
  const handleStopPropagation = (e: GestureResponderEvent) => {
    e.stopPropagation();
  };
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={handleStopPropagation}
          activeOpacity={1}>
            <Text style={styles.headerText}>Failed!</Text>
            <Text>You don't have enough coins to buy this product</Text>
            <TouchableOpacity onPress={() => {nav.navigate('Home' as never)}}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        gap: 25,
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        color: 'black',
      },
      buttonText: {
        color: '#743ADF',
        fontWeight: 'bold',
        fontSize: 18,
      },
});

export default NotEnoughModal;

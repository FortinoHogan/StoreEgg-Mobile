import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, GestureResponderEvent} from 'react-native';
import {ISuccessModal} from './ISuccessModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';
import { useNavigation } from '@react-navigation/native';

const SuccessModal = (props: ISuccessModal) => {
  const {visible, onClose, product, type} = props;
  const {amount} = useSelector((state: RootState) => state.coins);
  const handleStopPropagation = (e: GestureResponderEvent) => {
    e.stopPropagation();
  };
  const nav = useNavigation();
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={handleStopPropagation}
          activeOpacity={1}>
          <View>
            <Text style={styles.headerText}>Success!</Text>
            <Text>{product.title} was {type === 'Buy' ? 'bought' : 'sold'} successfully!</Text>
            <Text>Your current balance is {amount}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {onClose; type === 'Buy' ? nav.navigate('Home' as never) : nav.navigate('MyProducts' as never)}}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
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
  buttonContainer: {
    alignSelf: 'flex-end',
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
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default SuccessModal;

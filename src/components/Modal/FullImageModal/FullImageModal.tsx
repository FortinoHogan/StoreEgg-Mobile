import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {IFullImageModal} from './IFullImageModal';

const FullImageModal = (props: IFullImageModal) => {
  const {visible, product, onClose} = props;
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
        <Image source={{uri: product.image}} style={styles.fullScreenImage} />
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
  fullScreenImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 5,
    backgroundColor: '#8775A9',
    padding: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FullImageModal;

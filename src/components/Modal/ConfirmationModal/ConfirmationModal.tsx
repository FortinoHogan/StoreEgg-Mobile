import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {IConfirmationModal} from './IConfirmationModal';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProduct,
  removeProduct,
} from '../../../services/slices/MyProductSlice';
import {addCoin, subtractCoin} from '../../../services/slices/CoinSlice';
import SuccessModal from '../SuccessModal/SuccessModal';
import {RootState} from '../../../services/store';
import NotEnoughModal from '../NotEnoughModal/NotEnoughModal';

const ConfirmationModal = (props: IConfirmationModal) => {
  const {visible, product, onClose, type} = props;
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isNotEnoughModalVisible, setIsNotEnoughModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {amount} = useSelector((state: RootState) => state.coins);
  const handleStopPropagation = (e: GestureResponderEvent) => {
    e.stopPropagation();
  };
  const handleTransaction = () => {
    if (type === 'Buy') {
      if (amount > Math.floor(product.price)) {
        dispatch(addProduct(product));
        dispatch(subtractCoin(Math.floor(product.price)));
        setIsSuccessModalVisible(true);
      } else {
        setIsNotEnoughModalVisible(true);
      }
    } else {
      dispatch(removeProduct({id: product.id}));
      dispatch(addCoin(Math.floor(product.price)));
      setIsSuccessModalVisible(true);
    }
  };
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={handleStopPropagation}
          activeOpacity={1}>
          <View>
            {type === 'Buy' ? (
              <Text>
                Do you want to buy {product.title} for {product.price} coins?
              </Text>
            ) : (
              <Text>
                Do you want to sell {product.title} for {product.price} coins?
              </Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleTransaction}>
              <Text style={styles.text}>{type}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      {isSuccessModalVisible && (
        <SuccessModal
          visible={isSuccessModalVisible}
          onClose={() => {
            onClose;
            setIsSuccessModalVisible(false);
          }}
          product={product}
          type={type}
        />
      )}
      {isNotEnoughModalVisible && (
        <NotEnoughModal
          visible={isNotEnoughModalVisible}
          onClose={() => {
            setIsNotEnoughModalVisible(false);
          }}
        />
      )}
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
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#8775A9',
    padding: 10,
    borderRadius: 5,
    minWidth: 70,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

export default ConfirmationModal;

import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import FullImageModal from '../../components/Modal/FullImageModal/FullImageModal';
import ConfirmationModal from '../../components/Modal/ConfirmationModal/ConfirmationModal';

type DetailProductRouteProp = RouteProp<RootStackParamList, 'DetailProduct'>;

const DetailProductPage: React.FC<{route: DetailProductRouteProp}> = ({
  route,
}) => {
  const [isFullImageVisible, setIsFullImageVisible] = useState(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);
  const [buttonType, setButtonType] = useState<'Buy' | 'Sell'>('Buy');
  const {product, button} = route.params;

  const handleFullImageModalClick = () => {
    setIsFullImageVisible(!isFullImageVisible);
  };

  const handleConfirmationModalClick = () => {
    setIsConfirmationModalVisible(!isConfirmationModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFullImageModalClick}>
        <Image source={{uri: product.image}} style={styles.productImage} />
      </TouchableOpacity>
      <View style={styles.hr} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <View>
        <Text style={styles.detailTitle}>Price</Text>
        <Text>{product.price} Coins</Text>
      </View>
      <View>
        <Text style={styles.detailTitle}>Description</Text>
        <Text>{product.description}</Text>
      </View>
      <TouchableOpacity
        style={button === 'Buy' ? styles.buyBtn : styles.sellBtn}
        onPress={
          button === 'Buy'
            ? () => {
                handleConfirmationModalClick();
                setButtonType('Buy');
              }
            : () => {
                handleConfirmationModalClick();
                setButtonType('Sell');
              }
        }>
        <Text style={button === 'Buy' ? styles.buyTxt : styles.sellTxt}>
          {button === 'Buy' ? 'Buy' : 'Sell'}
        </Text>
      </TouchableOpacity>
      <FullImageModal
        visible={isFullImageVisible}
        product={product}
        onClose={handleFullImageModalClick}
      />
      <ConfirmationModal
        visible={isConfirmationModalVisible}
        product={product}
        onClose={handleConfirmationModalClick}
        type={buttonType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  productTitle: {
    fontWeight: '900',
    fontSize: 20,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buyBtn: {
    backgroundColor: '#8775A9',
    borderRadius: 5,
    padding: 10,
    elevation: 10,
    marginTop: 10,
  },
  buyTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  sellBtn: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 10,
    marginTop: 10,
  },
  sellTxt: {
    color: '#8775A9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  productImage: {
    height: 250,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default DetailProductPage;

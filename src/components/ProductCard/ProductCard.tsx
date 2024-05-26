import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IProductCard} from './IProductCard';
import { useNavigation } from '@react-navigation/native';

const ProductCard = (props: IProductCard) => {
  const {product, isGridView, button} = props;
  const nav = useNavigation();
  return (
    <TouchableOpacity
      style={isGridView ? styles.gridContainer : styles.listContainer} onPress={() => nav.navigate('DetailProduct', {button: button, product: product})}>
      <Image source={{uri: product.image}} style={styles.productImage} />
      <View>
        <Text>
          {isGridView
            ? product.title.substring(0, 10)
            : product.title.substring(0, 25)}
        </Text>
        <Text style={isGridView ? styles.gridPrice : {}}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 6,
    borderRadius: 3,
    elevation: 4,
    minHeight: 100,
    width: '95%',
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    elevation: 4,
    width: '42.5%',
  },
  productImage: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  gridPrice: {
    textAlign: 'center',
  }
});

export default ProductCard;

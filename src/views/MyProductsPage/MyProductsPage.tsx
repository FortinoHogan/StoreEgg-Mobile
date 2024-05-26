import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../services/store';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useTheme } from '../../contexts/ThemeContext';

const MyProductsPage = () => {
  const {products} = useSelector((state: RootState) => state.myProducts);
  const {darkMode} = useTheme();
  return (
    <View style={darkMode ? styles.containerDark : styles.container}>
      {products.length > 0 ? <FlatList
        data={products}
        keyExtractor={(item, index) => `${item.id}-${index}`} 
        renderItem={({item}) => (
          <ProductCard
            product={item}
            isGridView={false}
            button="Sell"
          />
        )}
      /> : <Text style={styles.errorText}>No products bought</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  containerDark: {
    padding: 10,
    backgroundColor: '#313338',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  }
});

export default MyProductsPage;

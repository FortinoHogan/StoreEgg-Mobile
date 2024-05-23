import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import MyProductsButton from '../../components/Button/MyProductsButton/MyProductsButton';
import MyCoin from '../../components/MyCoin/MyCoin';
import ListViewIcon from '../../assets/svg/ListViewIcon';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../services/store';
import {fetchProducts} from '../../services/slices/ProductSlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import GridViewIcon from '../../assets/svg/GridViewIcon';

const Home = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector(
    (state: RootState) => state.products,
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <SearchBar handleSearch={handleSearch} />
        <View style={styles.myProductContainer}>
          <MyProductsButton />
          <MyCoin amount={500} />
        </View>
      </View>
      <View style={styles.homePage}>
        <View style={styles.homePageHeaderContainer}>
          <Text style={styles.homePageHeaderTitle}>Available Products</Text>
          {isGridView ? (
            <GridViewIcon
              height={40}
              width={40}
              onPress={() => setIsGridView(!isGridView)}
            />
          ) : (
            <ListViewIcon
              height={40}
              width={40}
              onPress={() => setIsGridView(!isGridView)}
            />
          )}
        </View>
        <FlatList
          data={searchQuery ? filteredProducts : products}
          renderItem={({item}) => (
            <ProductCard key={item.id} product={item} isGridView={isGridView} button='Buy'/>
          )}
          key={isGridView ? 'grid' : 'list'}
          numColumns={isGridView ? 2 : 1}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator size="large" style={styles.loading} />
            ) : (
              <Text>{error ? `Error: ${error}` : 'No products available'}</Text>
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8775A9',
    flex: 1,
  },
  navbar: {
    padding: 30,
  },
  myProductContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homePage: {
    backgroundColor: 'white',
    elevation: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    position: 'relative',
    top: -50,
    zIndex: -1,
    display: 'flex',
    paddingBottom: 240,
    minHeight: '100%',
  },
  homePageHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 20,
  },
  homePageHeaderTitle: {
    color: 'black',
    fontSize: 23,
    fontWeight: '900',
  },
  loading: {
    marginTop: 25,
  },
});

export default Home;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import MyProductsButton from '../components/Button/MyProductsButton/MyProductsButton';
import MyCoin from '../components/MyCoin/MyCoin';
import ListViewIcon from '../assets/svg/ListViewIcon';

const Home = () => (
  <View style={styles.container}>
    <View style={styles.navbar}>
      <SearchBar />
      <View style={styles.myProductContainer}>
        <MyProductsButton />
        <MyCoin amount={500} />
      </View>
    </View>
    <View style={styles.homePage}>
      <View style={styles.homePageHeaderContainer}>
        <Text style={styles.homePageHeaderTitle}>Available Products</Text>
        <ListViewIcon height={40} width={40}/>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8775A9',
    minHeight: '100%',
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
    zIndex: -5,
    display: 'flex',
    minHeight: '100%',
  },
  homePageHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  homePageHeaderTitle: {
    color: 'black',
    fontSize: 23,
    fontWeight: '900',
  },
});

export default Home;

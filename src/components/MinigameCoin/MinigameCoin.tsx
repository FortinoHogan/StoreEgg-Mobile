import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMinigameCoin} from './IMinigameCoin';
import { useTheme } from '../../contexts/ThemeContext';

const MinigameCoin = (props: IMinigameCoin) => {
  const {coin, amount} = props;
  const {darkMode} = useTheme();
  switch (coin) {
    case 'gold':
      var imgUrl = require('../../assets/img/gold-coin.png');
      break;
    case 'silver':
      var imgUrl = require('../../assets/img/silver-coin.png');
      break;
    case 'bronze':
      var imgUrl = require('../../assets/img/bronze-coin.png');
      break;
    default:
      var imgUrl = require('../../assets/img/egg-full.png');
  }
  return (
    <View style={styles.container}>
      <Image source={imgUrl} style={styles.image} />
      <Text style={[styles.amount, darkMode && styles.textDark]}>{amount}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
  },
  amount: {
    color: 'black',
    fontSize: 20,
  },
  textDark: {
    color: 'white',
  }
});

export default MinigameCoin;

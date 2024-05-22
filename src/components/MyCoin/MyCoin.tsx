import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IMyCoin} from './IMyCoin';

const MyCoin = (props: IMyCoin) => {
  const {amount} = props;
  return (
    <View style={styles.myCoinContainer}>
      <Text style={styles.amount}>{amount}</Text>
      <Text style={styles.myCoinText}>My coins</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  myCoinContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingLeft: 25,
    paddingRight: 15,
    borderRadius: 10,
    elevation: 20,
  },
  amount: {
    color: '#743ADF',
    fontSize: 35,
    fontWeight: '900',
  },
  myCoinText: {
    color: 'black',
    fontSize: 20,
  }
});

export default MyCoin;

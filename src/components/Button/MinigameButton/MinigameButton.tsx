import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const MinigameButton = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => nav.navigate('Minigame' as never)}>
      <Image
        source={require('../../../assets/img/egg-full.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 100,
    elevation: 20,
    position: 'absolute',
    bottom: 310,
    right: 40,
  },
  image: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
});

export default MinigameButton;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export interface IExitModal {
  visible: boolean;
  onClose: () => void;
  onExit: () => void;
}

const ExitModal = (props: IExitModal) => {
  const { onClose, onExit, visible } = props;

  if (!visible) {
    return null;
  }

  return (
    visible ? (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>Are you sure you want to quit Storegg?</Text>
        <Image
          source={require('../../../assets/img/egg-broken.png')}
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onExit}>
            <Text style={styles.buttonTitle}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.buttonTitle}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    ) : null
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default ExitModal;

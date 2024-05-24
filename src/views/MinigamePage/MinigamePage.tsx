import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import MinigameCoin from '../../components/MinigameCoin/MinigameCoin';
import { useDispatch } from 'react-redux';
import { addCoin } from '../../services/slices/coinSlice';

type MinigameRouteProp = RouteProp<RootStackParamList, 'Minigame'>;
const MinigamePage: React.FC<{route: MinigameRouteProp}> = ({route}) => {
  const [imageSource, setImageSource] = useState(
    require('../../assets/img/egg-full.png'),
  );
  const [isClicked, setIsClicked] = useState(false);
  const [coinImageSource, setCoinImageSource] = useState<any>(null);
  const [contentText, setContentText] = useState('');
  const [footerText, setFooterText] = useState('');
  const dispatch = useDispatch();
  const imagePaths: {[key: string]: any} = {
    gold: require('../../assets/img/gold-coin.png'),
    silver: require('../../assets/img/silver-coin.png'),
    bronze: require('../../assets/img/bronze-coin.png'),
  };

  const handleClick = () => {
    if (imageSource === require('../../assets/img/egg-broken.png')) {
      return;
    }

    setIsClicked(true);
    setImageSource(require('../../assets/img/egg-broken.png'));

    const randomCoin = Math.floor(Math.random() * 3);
    let coinImage: string = '';
    let coinValue: number = 0;
    let coinText: string = '';

    switch (randomCoin) {
      case 0:
        coinImage = 'gold';
        coinValue = 100;
        coinText = '100 coins has been added to your balance';
        break;
      case 1:
        coinImage = 'silver';
        coinValue = 50;
        coinText = '50 coins has been added to your balance';
        break;
      case 2:
        coinImage = 'bronze';
        coinValue = 20;
        coinText = '20 coins has been added to your balance';
        break;
      default:
        break;
    }

    setCoinImageSource(imagePaths[coinImage]);
    setContentText(coinImage);
    setFooterText(coinText);
    dispatch(addCoin(coinValue))
  };

  return (
    <View style={styles.container}>
      <View style={styles.coinsContainer}>
        <MinigameCoin coin="gold" amount="100" />
        <MinigameCoin coin="silver" amount="50" />
        <MinigameCoin coin="bronze" amount="20" />
      </View>
      <View style={isClicked ? styles.bodyContainerAfter : styles.bodyContainer}>
        {isClicked ? (
          <>
            <Text style={styles.fontBold}>Congratulations!</Text>
            <Text style={styles.clickText}>You got a {contentText} coin!</Text>
            {coinImageSource && <Image source={coinImageSource} style={styles.coinImage}/>}
          </>
        ) : (
          <Text style={styles.clickText}>
            Click on the egg to get your prize!
          </Text>
        )}
        <TouchableOpacity onPress={handleClick} disabled={isClicked}>
          <Image source={imageSource} />
        </TouchableOpacity>
        {isClicked && <Text style={styles.fontBold}>{footerText}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  coinsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  clickText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  bodyContainer: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  bodyContainerAfter: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  coinImage: {
    height: 60,
    width: 60,
  }
});

export default MinigamePage;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IProduct} from '../interfaces/IProduct';

type HomeParams = {};
type DetailParams = {product: IProduct; button: string};
type MyProductParams = {product: IProduct[]};
type MinigameParams = {title: string};

export type RootStackParamList = {
  Home: HomeParams;
  DetailProduct: DetailParams;
  MyProducts: MyProductParams;
  Minigame: MinigameParams;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './views/HomePage/HomePage';
import {Provider} from 'react-redux';
import {store} from './services/store';
import MyProductsPage from './views/MyProductsPage/MyProductsPage';
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import { RootStackParamList } from './navigation/types';
import MinigamePage from './views/MinigamePage/MinigamePage';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{headerShown: false}}
            />
            <Stack.Screen name="MyProducts" component={MyProductsPage} />
            <Stack.Screen
              name="DetailProduct"
              component={DetailProductPage}
              options={({route}) => ({
                title: route.params.product.title,
              })}
            />
            <Stack.Screen
              name="Minigame"
              component={MinigamePage}
              options={({route}) => ({
                title: "Minigame",
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

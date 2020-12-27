/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Buttonz from '../components/button';
import Header from '../components/header';

const screen = {
  Login: {
    screen: Buttonz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => {
        <Header title="" navigation={navigation} />;
      },
    }),
  },
};
const loginRoute = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
  },
});
export default loginRoute;

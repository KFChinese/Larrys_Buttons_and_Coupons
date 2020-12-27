/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Coupons from '../components/coupons';
import Header from '../components/header';

const screen = {
  Setting: {
    screen: Coupons,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => {
        <Header
          title="Setting"
          navigation={navigation}
        />;
      },
    }),
  },
};
const couponRoute = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
  },
});
export default couponRoute;

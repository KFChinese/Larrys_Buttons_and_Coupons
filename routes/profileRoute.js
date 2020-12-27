/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Profile from '../components/profile';
import Header from '../components/header';

const screen = {
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => {
        <Header title="Profile" navigation={navigation} />;
      },
    }),
  },
};
const profileRoute = createStackNavigator(screen, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
  },
});
export default profileRoute;

/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import Dashboard from './navigation/dashboard';
import apiKeys from './config/keys';
import Homepage from './navigation/homepage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    // Load Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(apiKeys.firebaseConfig);
      firebase.auth().onAuthStateChanged((user) => {
        this.setState({ isAuthenticationReady: true });
        this.setState({ isAuthenticated: !!user });
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {(this.state.isAuthenticated)
          ? <Dashboard /> : <Homepage />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

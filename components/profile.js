/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import
{
  View, Text, StyleSheet, Alert, TouchableOpacity, Linking,
} from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'galio-framework';

export default class Profile extends React.Component {
    static navigationOptions = {
      headerShown: false,
    }
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    logUserOut = () => {
      firebase.auth().signOut()
        .then(() => {
          this.props.navigation.navigate('login');
        }).catch((err) => {
          Alert.alert(err.message);
        });
    }
    cpn = () => {
      this.props.navigation.navigate('Coupons');
    }
    btn = () => {
      this.props.navigation.navigate('Buttons');
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.Menu}>Main Menu</Text>

          <TouchableOpacity
            style={styles.Btn2}
            onPress={this.btn}
          >
            <Text style={styles.BTN_Text}>Buttons</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Btn1} onPress={this.cpn}>
            <Text style={styles.BTN_Text}>Coupons</Text>
          </TouchableOpacity>

          <Button title="Logout" style={styles.Butn} onPress={this.logUserOut}>
            <Text style={styles.loginText}>Log Out</Text>
          </Button>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#FFFFFF',
    marginBottom: 40,
  },

  Menu: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 25,
    fontSize: 45,
  },

  Btn1: {
    width: 300,
    backgroundColor: '#D7BE69',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 100,
  },

  Btn2: {
    width: 300,
    backgroundColor: '#50c878',
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 100,
  },

  Butn: {
    top: 30,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },

  BTN_Text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

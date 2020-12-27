/* eslint-disable react/no-unescaped-entities */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/newline-after-import */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Button, Alert, StyleSheet, KeyboardAvoidingView,
} from 'react-native';

import * as firebase from 'firebase';
export default class RetrievePassword extends React.Component {
    static navigationOptions = {
      headerShown: false,

    }
    constructor(props) {
      super(props);
      this.state = {
        email: '',
      };
    }
        fixPassword = () => {
          firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
              // Signup Successful
              Alert.alert('Check Your Email for your Password Reset!');
            })
            .catch((err) => {
              Alert.alert('Sorry, This is an Invalid or Incorrect Email.');
            });
        }
        GoBack = () => {
          this.props.navigation.navigate('Login');
        }
        render() {
          return (
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
              style={styles.container}
            >
              <View style={styles.container}>

                <Text style={styles.logo}>Larry's Buttons & Coupons 💯.</Text>

                <Text style={styles.reset}>Reset Your Password</Text>

                <View style={styles.inputView}>

                  <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#FFFFFF"
                    onChangeText={(email) => {
                      this.setState({ email: email });
                    }}
                    value={this.state.email}
                  />

                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={this.fixPassword}>
                  <Text style={styles.loginText}>Send Password Reset Via Email</Text>
                </TouchableOpacity>

                <Button title="Go Back" onPress={this.GoBack}></Button>
              </View>
            </KeyboardAvoidingView>
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

  inputView: {
    width: 350,
    backgroundColor: '#000000',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },

  inputText: {
    height: 50,
    color: 'white',
  },

  reset: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF',
    marginBottom: 20,
  },

  loginBtn: {
    width: 900,
    backgroundColor: '#FF0000',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  },

  loginText: {
    color: 'white',
  },
});

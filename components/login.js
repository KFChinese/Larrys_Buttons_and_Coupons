/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
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
  StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView,
}
  from 'react-native';
import * as firebase from 'firebase';

export default class Login extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  logUserIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        // login Successful
      }).catch((err) => {
        Alert.alert('Email or Password is Incorrect!');
      });
  }
  openSignupPage = () => {
    this.props.navigation.navigate('Signup');
  }
  retrievePwdPage = () => {
    this.props.navigation.navigate('RetrievePassword');
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Larry's Buttons & Coupons 😍</Text>
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
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#FFFFFF"
              onChangeText={(pwd) => {
                this.setState({ password: pwd });
              }}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity onPress={this.retrievePwdPage}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={this.logUserIn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={this.openSignupPage}>
            <Text style={styles.loginText}>New User? Sign Up Here</Text>
          </TouchableOpacity>

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

  forgot: {
    color: 'white',
    fontSize: 15,
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

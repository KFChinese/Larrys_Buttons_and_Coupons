/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-boolean-value */
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
  StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase';

export default class Signup extends React.Component {
  static navigationOptions = {
    headerShown: false,

  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
    createAccount = () => {
      if (this.state.password !== this.state.confirmPassword) {
        Alert.alert(
          'Both Passwords do not Match!',
        );
      }
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          // Signup Successful
          Alert.alert('Signup is Successful');
        })
        .catch((err) => {
          Alert.alert('Email or Password is Incorrect!');
        });
    }
  openLoginPage = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.container}>

          <Text style={styles.logo}>Larry's Buttons & Coupons 🥰</Text>

          <Text style={styles.text}>Create an Account</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="email"
            placeholderTextColor="#FFFFFF"
            onChangeText={(email) => {
              this.setState({ email: email });
            }}
            value={this.state.email}
          />

          <TextInput
            style={styles.emailInput}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            onChangeText={(password => {
              this.setState({ password: password });
            })}
            value={this.state.password}
            password
          />

          <TextInput
            style={styles.emailInput}
            placeholder="Confirm Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            onChangeText={(password2 => {
              this.setState({ confirmPassword: password2 });
            })}
            value={this.state.confirmPassword}
          />

          <TouchableOpacity>
            <Button
              style={styles.loginText}
              title="Sign up Now!"
              onPress={this.createAccount}
            >
            </Button>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={this.openLoginPage}>
            <Text style={styles.loginText}>Returning User? Log In Here</Text>

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

  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 40,

    textAlign: 'center',

  },

  emailInput: {
    width: 300,
    color: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
  },

  textInput: {
    borderWidth: 1,
    alignSelf: 'center',
    padding: 10,
    width: 200,
  },
  passwordInput: {
    borderWidth: 1,
    alignSelf: 'center',
    padding: 10,
    width: 200,
  },

  loginBtn: {
    width: 900,
    backgroundColor: '#FF0000',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  loginText: {
    color: 'white',
  },
});

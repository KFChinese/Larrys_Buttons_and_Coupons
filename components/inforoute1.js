/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import FlipCard from 'react-native-flip-card';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView,
}
  from 'react-native';

export default class InfoRoute1 extends Component {
    static navigationOptions = { headerShown: false }

      back = () => {
        this.props.navigation.navigate('Coupons');
      }

      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title1}></Text>
            <TouchableOpacity style={styles.Btn1} onPress={this.back}>
              <Text style={styles.Bak}>Go Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Information About the Coupons</Text>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.header}>Example Coupon</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back}>
                  <Text style={styles.header}>Scroll Down to see more!</Text>

                </View>

              </FlipCard>
              <Text style={styles.header}>Coupon Usage</Text>
              <Text style={styles.text}>These Coupons are valid for one time use ONLY.</Text>
              <Text style={styles.text}>Coupons are subject to change if it is unavailable.</Text>
              <Text style={styles.text}>Once redeemed, the Coupon becomes invalid.</Text>
              <Text style={styles.text}>           </Text>
            </ScrollView>
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

  Btn1: {
    top: 50,
    width: 100,
    height: 40,
    right: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
  },

  Btn2: {
    marginBottom: 20,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
  },
  Bak: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

  },

  CPN_1_Btn1: {
    top: 50,
    width: 150,
    backgroundColor: '#1DB954',
    borderRadius: 15,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  face: {
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7BE69',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    left: 40,
  },

  back: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f52ba',
    borderRadius: 15,
    left: 40,

  },

  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FFFFFF',
    top: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,

  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,

  },
  text: {
    width: 300,
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    left: 25,
  },

});

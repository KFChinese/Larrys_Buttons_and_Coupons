/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView,
}
  from 'react-native';

export default class InfoRoute2 extends Component {
    static navigationOptions = { headerShown: false }

      back = () => {
        this.props.navigation.navigate('Buttons');
      }

      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.title1}></Text>
            <TouchableOpacity style={styles.Btn1} onPress={this.back}>
              <Text style={styles.Bak}>Go Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Information About the Buttons</Text>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

              <TouchableOpacity
                style={styles.Btn4}
              >
                <Text
                  style={styles.Bak_1}
                >
                  {'       '}
                  Example Button             (This is NOT working)
                </Text>

              </TouchableOpacity>
              <Text style={styles.header}>Button Usage</Text>
              <Text style={styles.text}>Please do not SuperSpam these buttons.</Text>
              <Text style={styles.text}>They won't break, but might not work 100%.</Text>
              <Text style={styles.text_bottom}>Again, please use Sparingly 🙏.</Text>
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

  Bak_1: {
    fontWeight: 'bold',
    fontSize: 20,
    width: 250,
    height: 50,
    left: 20,
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
    width: 330,
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    left: 25,
  },
  text_bottom: {
    width: 330,
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    left: 25,
  },

  Btn4: {
    top: 50,
    width: 300,
    backgroundColor: '#1DB954',
    borderRadius: 55,
    marginBottom: 50,
    left: 30,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

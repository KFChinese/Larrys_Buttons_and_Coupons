/* eslint-disable react/jsx-boolean-value */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Linking, ScrollView,
} from 'react-native';

import Slack from 'react-native-slack-webhook';
import { webhookURL } from '../config/env';

export default class Coupons extends React.Component {
    static navigationOptions = {
      headerShown: false,

    }

      back = () => {
        this.props.navigation.navigate('Home');
      }

      info = () => {
        this.props.navigation.navigate('  ');
      }

      render() {
        return (

          <View style={styles.container}>

            <Text style={styles.title1}></Text>

            <TouchableOpacity style={styles.Btn1_bak} onPress={this.back}>
              <Text style={styles.Bak}>Go Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Btn2_info} onPress={this.info}>
              <Text style={styles.Bak}>i</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Larry's Buttons 😎</Text>

            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

              <TouchableOpacity
                style={styles.Btn1}
                onPress={() => new Slack(webhookURL).post('Answer Larry!', '#dtest')}
              >

                <Text
                  style={styles.Bak}
                >
                  Get Larry's Attention ⚠️
                </Text>

              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Btn2}
                onPress={() => new Slack(webhookURL).post('I Love Annoying You 🤣', 'Push')}
              >

                <Text
                  style={styles.Bak}
                >
                  Spam Larry with Love 🥰
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.Btn3}
                onPress={() => Linking.openURL('https://remote.lighting/home')}
              >

                <Text
                  style={styles.Bak}
                >
                  Change Larry's Lights 💡
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.Btn4}
              >
                <Text
                  style={styles.Bak}
                >
                  {' '}
                  More Buttons Coming Soon!
                </Text>

              </TouchableOpacity>
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
  Btn1_bak: {
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

  Btn2_info: {
    top: 15,
    width: 30,
    height: 30,
    left: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    backfaceVisibility: 'hidden',
    borderRadius: 20,
  },
  scroll: {

    bottom: 40,
    flex: 1,
  },

  Bak: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Btn1: {
    top: 50,
    width: 300,
    backgroundColor: '#DC143C',
    borderRadius: 55,
    marginBottom: 50,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    bottom: 5,
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
  },
  Btn2: {
    top: 50,
    width: 300,
    backgroundColor: '#efb9c4',
    borderRadius: 55,
    marginBottom: 50,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn3: {
    top: 50,
    width: 300,
    backgroundColor: '#FFD300',
    borderRadius: 55,
    marginBottom: 50,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn4: {
    top: 50,
    width: 300,
    backgroundColor: '#1DB954',
    borderRadius: 55,
    marginBottom: 50,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

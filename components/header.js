/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
  const openMenu = () => {
    // eslint-disable-next-line react/prop-types
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <MaterialIcons styles={styles.icon} name="Menu" onPress={openMenu} />
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    color: '#111',

  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#111',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: -50,
    fontSize: 25,
  },
});

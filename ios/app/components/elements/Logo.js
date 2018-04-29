

import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';
import colors from './Colors';

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.logo}>
      <Text style={styles.title}>DATE NIGHT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 2,
  },
  title: {
    color: '#fff',
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 30,
    textShadowColor: colors.dkTeal,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  }
});

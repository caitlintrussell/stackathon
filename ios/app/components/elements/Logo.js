

import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.logo}>
      <Image source={require('../../../../assets/img/dn-black.png')} />
      <Text style={styles.title}>DATE NIGHT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center'
  },
  title: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 45,
  }
});

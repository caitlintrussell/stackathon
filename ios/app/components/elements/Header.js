
import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import colors from './Colors';

export default class HeaderText extends Component {
  render() {
    return (
        <Text style={styles.text}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 55,
    textShadowColor: colors.dkTeal,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
    marginBottom: 25,
  }

});

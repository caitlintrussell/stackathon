
import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import color from './Colors';

export default class TextStyled extends Component {
  render() {
    return (
        <Text style={styles.body}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    textAlign: 'center',
    color: color.dkTeal,
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 30,
  }
});

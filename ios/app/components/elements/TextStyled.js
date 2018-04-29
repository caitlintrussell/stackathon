
import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class TextStyled extends Component {
  render() {
    return (
        <Text style={styles.body}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 35,
  }
});

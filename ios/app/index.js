import React, { Component } from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Login from './components/login/login';

let { height } = Dimensions.get('window');

export default class Layout extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[ styles.box1]}></View>
            <View style={[ styles.box2]}><Login /></View>
            <View style={[ styles.box3]}></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height,
  },
  box1: {
    flex: 1,
    backgroundColor: '#298c80',
  },
  box2: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fee1bf',
  },
  box3: {
    flex: 0.5,
    backgroundColor: '#e3aa1a',
  }
});

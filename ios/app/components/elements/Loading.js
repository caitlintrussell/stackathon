import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../elements/Colors';
import Logo from '../elements/Logo';
import Header from './Header';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box1]}>
          <Logo />
        </View>
        <View style={[styles.box2]}>
          <Header text="Loading..." />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.orange,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box2: {
    flex: 9,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: colors.beige,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
});

import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Login from './components/login/login';
import Logo from './components/elements/Logo';
import colors from './components/elements/Colors';
import { Header } from 'react-native-elements';
let { height } = Dimensions.get('window');

export default class Layout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'menu', style: { color: 'white' } }}
          centerComponent={<Logo />}
          rightComponent={{ icon: 'home', style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: colors.orange, paddingTop: 10 }}
          innerContainerStyles={{ justifyContent: 'space-between' }}
        />
        <View style={[styles.box2]}>
          <Login />
        </View>
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
  // box1: {
  //   flex: 1,
  //   alignItems: 'center',
  //   padding: 5,
  //   backgroundColor: colors.orange,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  // },
  box2: {
    flex: 6,
    justifyContent: 'space-between',
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fee1bf',
  },
});

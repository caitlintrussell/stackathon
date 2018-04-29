import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Login from './components/login/login';
import Account from './components/login/account';
import Logo from './components/elements/Logo';
import colors from './components/elements/Colors';
let { height } = Dimensions.get('window');
import { StackNavigator } from 'react-navigation';


class Layout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box1]} >
          <Logo />
        </View>
        <View style={[styles.box2]}>
          <Login navigate={this.props.navigation.navigate}/>
        </View>
      </View>
    );
  }
}

export default StackNavigator({
  Home: { screen: Layout },
  Account: { screen: Account },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height,
  },
  box1: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.orange,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box2: {
    flex: 6,
    justifyContent: 'space-between',
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fee1bf',
  },
});

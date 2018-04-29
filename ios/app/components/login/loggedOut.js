import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Login from './login';
import colors from '../elements/Colors'

export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box2]}>
          <Login navigate={this.props.navigation.navigate}/>
        </View>
      </View>
    );
  }
}

let { height } = Dimensions.get('window');
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
    backgroundColor: colors.beige,
  },
});

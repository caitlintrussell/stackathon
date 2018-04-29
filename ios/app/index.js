import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, AsyncStorage } from 'react-native';
import Login from './components/login/login';
import colors from './components/elements/Colors';

import {createRootNavigator} from './components/nav';
import { isSignedIn } from './auth';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    // AsyncStorage.removeItem('LOGGED_IN')
    isSignedIn()
      .then(res => {
        this.setState({ signedIn: res, checkedSignIn: true })})
      .catch(err => console.error(err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

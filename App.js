
import React, { Component } from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient'
import Home from './ios/app';
import {SignedOut} from './ios/app/components/nav';

let { height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Home />
      </ApolloProvider>
    );
  }
}



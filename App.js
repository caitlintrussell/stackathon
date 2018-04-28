
import React, { Component } from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import { ApolloProvider } from 'react-apollo';

import Layout from './ios/app';

let { height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}



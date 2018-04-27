
import React, { Component } from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from './ios/app';
import client from './server/app';

let { height } = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Layout />

)
      </ApolloProvider>
    );
  }
}



import React, { Component } from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Login from './components/login/login';

let { height } = Dimensions.get('window');

import { gql } from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_BURRITOS = gql `
  {
    search(term: "burrito", location: "san francisco") {
      business {
        name
      }
    }
  }
  `

const App = () => (
  <Query query={GET_BURRITOS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <Text>{data.search.businesses[0].name}</Text>
      )
    }}
  </Query>
)


export default class Layout extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[ styles.box1]}></View>
            <View style={[ styles.box2]}><App /></View>
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

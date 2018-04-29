import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import HeaderText from '../elements/Header';
import colors from '../elements/Colors';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
export const meQuery = gql`
  query {
    me {
      id
      name
      email
      dates {
        initiator
        zipCode
        voteCount
        memberCount
      }
    }
  }
`;

class Account extends Component {
  render() {
    return (
      <View>
        <Text> I am here in this account!! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginInput: {
    height: 50,
    width: 280,
    color: colors.dkTeal,
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 25,
    paddingLeft: 15,
    margin: 15,
    borderBottomColor: colors.orange,
    borderBottomWidth: 1,
    borderLeftColor: colors.orange,
    borderLeftWidth: 1,
  },
  buttonContainer: {
    paddingVertical: 15,
  },
  button: {
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'AvenirNextCondensed-Bold',
      fontSize: 35,
      textShadowColor: colors.dkTeal,
      textShadowOffset: { width: 1, height: 2 },
      textShadowRadius: 2
  }
});

export default compose(
  graphql(meQuery),
)(Account)

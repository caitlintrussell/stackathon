/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { graphql, compose, Query } from 'react-apollo';

import locations from './locations';
import { GetDateInfo } from './gql';
import colors from '../elements/Colors';
import Loading from '../elements/Loading';
import HeaderText from '../elements/Header';
import TextStyled from '../elements/TextStyled';

const winningCategory = votes => {
  let hash = {};
  let max = 0;
  let result = '';
  votes.reduce((votesCount, vote) => {
    if (votesCount.hasOwnProperty(vote.value)) votesCount[vote.value]++;
    else votesCount[vote.value] = 1;
    if (votesCount[vote.value] > max) {
      max = votesCount[vote.value];
      result = vote.value;
    }
    return votesCount;
  }, {});
  console.log(result);
  return result;
};

export class Date extends Component {
  render() {
    const id = this.props.navigation.state.params.dateId;
    console.log(locations['thai']);
    return (
      <Query query={GetDateInfo} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <Text>Error :(</Text>;
          const date = data.dateById;
          return (
            <View style={styles.container}>
              <View style={[styles.box2]}>
                <HeaderText text={date.when} />
                <View style={styles.line}>
                  {date.members.length === date.votes.length ? (
                    <Text style={styles.button}>
                      {'@' + locations[winningCategory(date.votes)] + ' with'}
                    </Text>
                  ) : (
                    <TextStyled text="Still waiting on votes!" />
                  )}
                </View>
                <View style={styles.line}>
                  {date.votes.map(vote => (
                    <TextStyled
                      key={vote.user.name.length}
                      text={vote.user.name}
                    />
                  ))}
                </View>
              </View>
            </View>
          );
        }}
      </Query>
    );
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box2: {
    flex: 9,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: colors.beige,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  buttonContainer: {
    paddingVertical: 15,
  },
  button: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 32,
    textShadowColor: colors.dkTeal,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
  line: {
    paddingVertical: 10,
    width,
  },
});

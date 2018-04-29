/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { graphql, compose } from 'react-apollo';
import { datesQuery } from './gql';
import colors from '../elements/Colors';
import Logo from '../elements/Logo';
import List from '../elements/List';
import Loading from '../elements/Loading';

class DatesComponent extends Component {
  render() {
    if (!this.props.data.me) return <Loading />
    const {dates} = this.props.data.me;
    return (
      <View style={styles.container}>
        <View style={[styles.box1]}>
          <Logo />
        </View>
        <View style={[styles.box2]}>
          {dates.map(date => (
                <List
                navigate={this.props.navigation}
                id={date.id}
                when={date.when}
                members={date.memberCount}
                votes={date.voteCount}
                key={date.id}
                />
              ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.orange,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  box2: {
    flex: 9,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: colors.beige,
    display: 'flex',
    flexDirection: 'column',
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
    fontSize: 35,
    textShadowColor: colors.dkTeal,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
});

export const Dates = compose(graphql(datesQuery))(DatesComponent);

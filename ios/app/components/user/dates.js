/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
        <View style={[styles.box2]}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.button}>Dates</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>Friends</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>Votes</Text>
          </View>
        </View>
          {dates.map(date => (
                <List
                navigate={this.props.navigation.navigate}
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
  list: {
    backgroundColor: colors.beige,
    borderBottomColor: colors.orange,
    borderBottomWidth: 1,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width,
  },
  listItem: {
    // flex: 1,
  },
  text: {
    color: colors.dkTeal,
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 22,
  },
});

export const Dates = compose(graphql(datesQuery))(DatesComponent);

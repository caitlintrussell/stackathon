import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { graphql, compose } from 'react-apollo';

import colors from '../elements/Colors';
import TextStyled from '../elements/TextStyled';
import { meQuery } from './gql';
import { onSignOut } from '../../auth';
import Logo from '../elements/Logo';
import Loading from '../elements/Loading';

class Home extends Component {
  logout = async () => {
    await onSignOut();
    this.props.navigation.navigate('SignedOut');
  };
  addDate = () => {
    this.props.navigation.navigate('AddDate', {userId: this.props.data.me.id, initiator: this.props.data.me.name})
  }
  render() {
    if (!this.props.data.me) return <Loading />;
    const { me } = this.props.data;
    return (
      <View style={styles.container}>
        <View style={[styles.box2]}>
          <Text style={styles.button}>
            {`Welcome ${me.name.split(' ')[0]}!`.toUpperCase()}
          </Text>
          <TouchableOpacity
            onPress={this.addDate}
            style={styles.buttonContainer}
          >
            <Text style={styles.button}>PLAN A DATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.logout}
            style={styles.buttonContainer}
          >
            <Text style={styles.button}>LOGOUT</Text>
          </TouchableOpacity>
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
  box2: {
    flex: 9,
    justifyContent: 'space-between',
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: colors.beige,
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

export const Account = compose(graphql(meQuery))(Home);

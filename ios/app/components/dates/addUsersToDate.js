import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { graphql, compose, Query } from 'react-apollo';

import colors from '../elements/Colors';
import TextStyled from '../elements/TextStyled';
import HeaderText from '../elements/Header';
import { AddUserToDate, GetUsers } from './gql';

import Loading from '../elements/Loading';


export class AddUsers extends Component {
  _addUserToDate = async id => {
      try {
      await this.props.AddUserToDate({
        variables: {
          userId,
          dateId
        },
      })
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    console.log(this.props.data)
    return (
      <Query query={GetUsers}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <Text>Error :(</Text>;
          const users = data.allUsers;
          return (
            <View style={styles.container}>
              <View style={[styles.box2]}>
                <HeaderText text="INVITE FRIENDS" />
                <View style={styles.line}>
                </View>
                <View style={styles.line}>
                  {users.map(user => (
                    <Text key={user.id} style={styles.button}>
                      {user.name}
                    </Text>
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

// export const Account = compose(graphql(meQuery))(Home);

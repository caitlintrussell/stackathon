import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import HeaderText from '../elements/Header';
import colors from '../elements/Colors';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const loginMutation = gql`
mutation LoginMutation($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
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

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
       email: '',
       password: '',
       loggedIn: false,
    };
  }
  _login = async () => {
    const { email, password } = this.state
    try {
    await this.props.loginMutation({
      variables: {
        email,
        password
      },
    })
    this.setState({ loggedIn: true });
  }
  catch (err) {
    console.error(err);
  }
  }
  goToAccount = async() => {
    this._login()
    console.log('I worked????')
    // this.props.navigation.navigate('Account')
  }
  render() {
    return (
      <View>
        <HeaderText text="LOGIN"/>
        <StatusBar barStyle="light-content" />
        <TextInput
        placeholder="email"
        placeholderTextColor={colors.orange}
        style={styles.loginInput}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(email) => this.setState({email})}
        onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
        style={styles.loginInput}
        placeholder="password"
        secureTextEntry
        returnKeyType="go"
        placeholderTextColor={colors.orange}
        onChangeText={(password) => this.setState({password})}
        ref={(input) => {this.passwordInput = input}}
        />
        <TouchableOpacity
        onPress={this.goToAccount}
        style={styles.buttonContainer}
        >
          <Text style={styles.button} >SUBMIT</Text>
        </TouchableOpacity>
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
  graphql(loginMutation, {
    props: ({ data, mutate }) => ({data, loginMutation: mutate}),
  })
)(Login)

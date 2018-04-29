import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import HeaderText from '../elements/Header';
import colors from '../elements/Colors';
import { graphql, compose } from 'react-apollo';
import {loginMutation, meQuery} from './gql'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
       email: '',
       password: '',
       loggedIn: false,
       navigation: props.navigation,
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
    console.log('I worked????')
  }
  catch (err) {
    console.error(err);
  }
  }
  goToAccount = async() => {
    await this._login()
    console.log(this.props)
    this.props.navigate('Account')
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
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
      </KeyboardAvoidingView>
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

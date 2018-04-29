import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import HeaderText from '../elements/Header';
import colors from '../elements/Colors';

export default class LoginForm extends Component {
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
        onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
        style={styles.loginInput}
        placeholder="password"
        secureTextEntry
        returnKeyType="go"
        placeholderTextColor={colors.orange}
        ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer} >
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

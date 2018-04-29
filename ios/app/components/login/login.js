import React, { Component } from 'react';
import {StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import {TextStyled} from '../elements/TextStyled';
import {Logo} from '../elements/Logo';

const Login = props => {
  return (
    <View>
      <Logo />
      <TextStyled text='Username' />
        <TextInput style={styles.loginInput} />
      <TextStyled text='Password' />
        <TextInput style={styles.loginInput} />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  loginInput: {
    height: 70,
    width: 280,
    color: '#000',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 30,
    padding: 5,
    margin: 5,
  },
  loginContainer: {

  },
  header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    borderRadius: 30,
  },
});

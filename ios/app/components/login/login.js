import React, { Component } from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import { connect } from 'react-redux';

const Login = props => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.header}> Username</Text>
        <TextInput style={styles.loginInput} />
      <Text style={styles.header}> Password</Text>
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

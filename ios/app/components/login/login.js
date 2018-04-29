import React, { Component } from 'react';
import {StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import TextStyled from '../elements/TextStyled';
import Logo from '../elements/Logo';
import LoginForm from './loginForm';

const Login = props => {
  return (
    <KeyboardAvoidingView behavior='padding'>
      <LoginForm />
    </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({

});

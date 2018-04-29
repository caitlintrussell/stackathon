import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import HeaderText from '../elements/Header';
import colors from '../elements/Colors';
import { Query, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const votes = () => {
  return <HeaderText text="VOTES" />
}

export default votes;

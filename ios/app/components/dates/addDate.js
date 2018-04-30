/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { graphql, compose, Query } from 'react-apollo';

import locations from './locations';
import { GetDateInfo } from './gql';
import colors from '../elements/Colors';
import Loading from '../elements/Loading';
import HeaderText from '../elements/Header';
import TextStyled from '../elements/TextStyled';

export class AddDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      when: '',
      zipCode: '',
    };
  }
  goToAddUsers = async () => {
    // await this._login();
    // this.props.navigate('SignedIn');
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <HeaderText text="LOGIN" />
        <TextInput
          placeholder="when"
          placeholderTextColor={colors.orange}
          style={styles.loginInput}
          autoCapitalize="none"
          autoCorrect={true}
          onChangeText={when => this.setState({ when })}
          onSubmitEditing={() => this.zipCode.focus()}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="zipCode"
          secureTextEntry
          returnKeyType="go"
          placeholderTextColor={colors.orange}
          onChangeText={zipCode => this.setState({ zipCode })}
          ref={input => {
            this.zipCode = input;
          }}
        />
        <TouchableOpacity
          onPress={this.goToAddUsers}
          style={styles.buttonContainer}
        >
          <Text style={styles.button}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
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
    fontSize: 32,
    textShadowColor: colors.dkTeal,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 2,
  },
  line: {
    paddingVertical: 10,
    width,
  },
});


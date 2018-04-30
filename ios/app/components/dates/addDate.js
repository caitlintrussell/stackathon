/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { graphql, compose, Query } from 'react-apollo';

import { AddDateMutation } from './gql';
import colors from '../elements/Colors';
import TextStyled from '../elements/TextStyled';

class AddDateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      when: '',
      zipCode: '',
    };
  }
  _addDate = async () => {
    const { when, zipCode } = this.state;
    const {initiator, userId} = this.props.navigation.state.params
    try {
      await this.props.AddDateMutation({
        variables: {
          initiator,
          when,
          zipCode,
          userId,
        },
      })
    } catch (err) {
      console.error(err);
    }
  }

  goToAddUsers = async () => {
    await this._addDate();
    this.props.navigation.navigate('AddUsers');
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.box2}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.button}>PLAN A DATE</Text>
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
      </View>
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


export const AddDate = compose(
  graphql(AddDateMutation, {
    props: ({ mutate, data }) => ({ AddDateMutation: mutate, data }),
  })
)(AddDateComponent);


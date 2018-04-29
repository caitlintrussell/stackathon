import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from './Colors';

export default class TextStyled extends Component {
  goToDate = async () => {
    this.props.navigate('Date', {dateId: this.props.id});
  };
  render() {
    return (
      <View style={styles.list}>
        <View style={styles.listItem}>
          <TouchableOpacity onPress={this.goToDate}>
          <Text style={styles.button}>{this.props.when}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.text}>{this.props.members}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.text}>{this.props.votes}</Text>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  list: {
    borderBottomColor: colors.orange,
    borderBottomWidth: 1,
    width,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listItem: {
    // flex: 1,
  },
  text: {
    color: colors.dkTeal,
    fontFamily: 'AvenirNextCondensed-Medium',
    fontSize: 22,
  },
  button: {
    color: '#fff',
    fontFamily: 'AvenirNextCondensed-Bold',
    fontSize: 28,
    textShadowColor: colors.dkTeal,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

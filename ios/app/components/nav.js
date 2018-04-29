import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, SwitchNavigator } from 'react-navigation';

import colors from './elements/Colors';

import Logo from './elements/Logo';
import LoggedOut from './login/loggedOut';
import { Dates } from './user/dates';
import Votes from './user/votes';
import { Account } from './user/account'

export const SignedIn = TabNavigator({
  Home: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'ACCOUNT'
    }
  },
  Dates: {
    screen: Dates,
    navigationOptions: {
      tabBarLabel: 'DATES'
    }
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 25,
      color: '#fff',
      fontFamily: 'AvenirNextCondensed-Regular',
      textShadowColor: colors.orange,
      textShadowOffset: { width: 1, height: 2 },
      textShadowRadius: 2,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      backgroundColor: colors.teal,
    },
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});


export const SignedOut = StackNavigator({
  LoggedOut: { screen: LoggedOut },
  Account: { screen: SignedIn },
  }, {
  initialRouteName: 'LoggedOut',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
  headerTitle: <Logo />,
    headerStyle: {
      backgroundColor: colors.orange,
    },
  headerTintColor: '#fff',
  },
});


export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

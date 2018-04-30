import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, SwitchNavigator } from 'react-navigation';

import colors from './elements/Colors';

import Logo from './elements/Logo';
import LoggedOut from './login/loggedOut';
import { Dates } from './user/dates';
import { Date } from './dates/singleDate';
import { AddDate } from './dates/addDate';
import { AddUsers } from './dates/addUsersToDate';
import Votes from './user/votes';
import { Account } from './user/account';

const stackHeader = (initial) => ({
  initialRouteName: initial,
  navigationOptions: {
    headerTitle: <Logo />,
      headerStyle: {
        backgroundColor: colors.orange,
      },
    headerTintColor: '#fff',
    },
})

export const SignedIn = TabNavigator({
  Home: {
    screen: StackNavigator({
      Account: Account,
      AddDate: AddDate,
    }, stackHeader('Account')),
    navigationOptions: {
      tabBarLabel: 'ACCOUNT'
    }
  },
  Dates: {
    screen: StackNavigator({
      AllDates: Dates,
      Date: Date,
      AddUsers: AddUsers,
    }, stackHeader('AllDates')),
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
  Login: { screen: LoggedOut },
  Account: { screen: SignedIn },
  }, stackHeader('Login'));

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


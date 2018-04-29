import { AsyncStorage } from 'react-native';

export const LOGGED_IN = 'LOGGED_IN';

export const onSignIn = () => AsyncStorage.setItem(LOGGED_IN, 'true');

export const onSignOut = () => AsyncStorage.removeItem(LOGGED_IN);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(LOGGED_IN)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

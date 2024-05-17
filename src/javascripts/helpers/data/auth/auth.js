import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../../buttons/loginButton';
import logoutButton from '../../../buttons/logoutButton';
import startApp from '../../../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;

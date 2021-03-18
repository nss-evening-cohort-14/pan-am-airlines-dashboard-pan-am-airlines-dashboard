import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import home from '../views/home';
import startApp from '../views/startApp';
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
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;

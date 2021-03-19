<<<<<<< HEAD
import domBuilder from './domBuilder';
import navEvents from '../events/navEvents';
import home from './home';
import navBar from '../components/navBar';
import logoutButton from '../buttons/logoutButton';
=======
import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import getFood from '../helpers/foodData';
import { showFood } from '../components/food';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
// import domEvents from '../events/domEvents';
// import navEvents from '../events/navEvents';
// import home from './home';
>>>>>>> development

const startApp = (userObject) => {
  domBuilder();
  // home();
  navBar();
<<<<<<< HEAD
  navEvents(userObject);
  logoutButton();
  // domEvents(userObject);
=======
  // loginButton();
  // logoutButton();
  getFood(userObject).then((foodServices) => showFood(foodServices));
  // navEvents(userObject.uid);

  // domEvents(userObject.uid);
>>>>>>> development
};

export default startApp;

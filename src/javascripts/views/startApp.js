import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import getPlanes from '../helpers/data/planeData';
import showPlanes from '../components/planes';
import addPlane from '../components/forms/addPlaneForm';
// import getFood from '../helpers/foodData';
// import { showFood } from '../components/food';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
// import domEvents from '../events/domEvents';
// import navEvents from '../events/navEvents';
// import home from './home';

const startApp = (userObject) => {
  domBuilder();
  // home();
  navBar();
  // loginButton();
  // logoutButton();
  addPlane();
  getPlanes(userObject).then((planesArray) => showPlanes(planesArray));
  // getFood(userObject).then((foodServices) => showFood(foodServices));
  // navEvents(userObject.uid);

  // domEvents(userObject.uid);
};

export default startApp;

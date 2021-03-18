import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import getFood from '../helpers/foodData';
import { showFood } from '../components/food';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  // loginButton();
  // logoutButton();
  getFood().then((foodServices) => showFood(foodServices));
};

export default startApp;

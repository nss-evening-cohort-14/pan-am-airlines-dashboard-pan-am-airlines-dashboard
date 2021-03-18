import { showAirports } from '../components/airports';
import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import navEvents from '../events/navEvents';
import getAirports from '../helpers/data/airportData';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  navEvents(userObject.uid);
  // loginButton();
  // logoutButton();
  getAirports(userObject.uid).then((airportArray) => showAirports(airportArray));
};

export default startApp;

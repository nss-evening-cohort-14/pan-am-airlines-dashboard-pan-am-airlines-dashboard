import airportDomEvents from '../events/airportDomEvents';
import navEvents from '../events/navEvents';
import home from './home';
import logoutButton from '../buttons/logoutButton';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';

const startApp = (userObject) => {
  domBuilder();
  airportDomEvents(userObject.uid);
  home();
  navBar();
  navEvents(userObject.uid);
  logoutButton();
};

export default startApp;

import airportDomEvents from '../events/airportDomEvents';
import navEvents from '../events/navEvents';
import home from './home';
import logoutButton from '../buttons/logoutButton';
import planeDomEvents from '../events/planeDomEvents';
import foodDomEvents from '../events/foodDomEvents';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject);
  airportDomEvents(userObject.uid);
  planeDomEvents(userObject);
  foodDomEvents();
  navEvents(userObject.uid);
  logoutButton();
};

export default startApp;

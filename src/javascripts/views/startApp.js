import home from './home';
import logoutButton from '../buttons/logoutButton';
import bagDomEvents from '../events/baggageDomEvents';
import airportDomEvents from '../events/airportDomEvents';
import planeDomEvents from '../events/planeDomEvents';
import foodDomEvents from '../events/foodDomEvents';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import navEvents from '../events/navEvents';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject.uid);
  bagDomEvents(userObject.uid);
  planeDomEvents(userObject.uid);
  airportDomEvents(userObject.uid);
  foodDomEvents(userObject.uid);
  logoutButton();
};

export default startApp;

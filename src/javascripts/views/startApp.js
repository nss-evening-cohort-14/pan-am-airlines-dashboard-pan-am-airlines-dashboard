import home from './home';
import logoutButton from '../buttons/logoutButton';
import airportDomEvents from '../events/airportDomEvents';
import baggageDomEvents from '../events/baggageDomEvents';
import planeDomEvents from '../events/planeDomEvents';
import foodDomEvents from '../events/foodDomEvents';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import navEvents from '../events/navEvents';
import crewDomEvents from '../events/crewDomEvent';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject);
  airportDomEvents(userObject.uid);
  planeDomEvents(userObject);
  foodDomEvents();
  crewDomEvents(userObject);
  baggageDomEvents(userObject);
  logoutButton();
};

export default startApp;

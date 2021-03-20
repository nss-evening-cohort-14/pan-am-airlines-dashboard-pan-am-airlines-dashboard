import home from './home';
import logoutButton from '../buttons/logoutButton';
import baggageDomEvents from '../events/baggageDomEvents';
import airportDomEvents from '../events/airportDomEvents';
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
  navEvents(userObject.uid);
  crewDomEvents(userObject.uid);
  baggageDomEvents(userObject.uid);
  airportDomEvents(userObject.uid);
  foodDomEvents(userObject.uid);
  planeDomEvents(userObject);
  logoutButton();
};

export default startApp;

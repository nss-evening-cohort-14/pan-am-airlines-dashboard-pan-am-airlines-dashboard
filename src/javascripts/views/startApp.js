import navEvents from '../events/navEvents';
import home from './home';
import logoutButton from '../buttons/logoutButton';
import airportDomEvents from '../events/airportDomEvents';
import planeDomEvents from '../events/planeDomEvents';
import { getPlanes } from '../helpers/data/planeData';
import showPlanes from '../components/planes';
import foodDomEvents from '../events/foodDomEvents';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject);
  planeDomEvents();
  navEvents(userObject.uid);
  airportDomEvents(userObject.uid);
  foodDomEvents();
  logoutButton();
};

export default startApp;

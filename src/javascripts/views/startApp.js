import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import airportDomEvents from '../events/airportDomEvents';
// import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import home from './home';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject.uid);
  airportDomEvents(userObject.uid);
  // domEvents(userObject.uid);
};

export default startApp;

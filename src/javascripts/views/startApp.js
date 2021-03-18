// import { showCrews } from '../components/crew';
// import { showBaggage } from '../components/forms/baggage';
import { showAirports } from '../components/airports';
import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
// import planeDomEvents '../planeDomEvents';
// import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import showPlanes from '../components/planes';
import getPlanes from '../helpers/data/planeData';
// import { getBaggage } from '../helpers/baggageData';
// import domEvents from '../events/domEvents';
// import crewDomEvents from '../events/crewDomEvents';
import navEvents from '../events/navEvents';
import getAirports from '../helpers/data/airportData';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
// import { getCrews } from '../helpers/crewData';

const startApp = (userObject) => {
  domBuilder();
  // domEvents(userObject.uid);
  // crewDomEvents(userObject.uid);
  // navigationEvents();
  navBar();
  navEvents(userObject.uid);
  // loginButton();
  logoutButton();
  // PUT ALL PLANES ON THE DOM //
  getPlanes().then((planes) => showPlanes(planes));
  // logoutButton();
  // getCrews(userObject).then((crews) => showCrews(crews)); // IMPLELMENT .UID ON USEROBJECT WHEN DOMEVENTS GETS USED
  // getBaggage(userObject).then((baggage) => showBaggage(baggage)); // IMPLELMENT .UID ON USEROBJECT WHEN DOMEVENTS GETS USED
  getAirports(userObject.uid).then((airportArray) => showAirports(airportArray));
};

export default startApp;

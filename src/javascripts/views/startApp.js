import { showCrews } from '../components/crews';
import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
// import domEvents from '../events/domEvents';
// import crewDomEvents from '../events/crewDomEvents';
// import loginButton from '../components/loginButton';
// import logoutButton from '../components/logoutButton';
import { getCrews } from '../helpers/crewData';

const startApp = (userObject) => {
  domBuilder();
  // domEvents(userObject.uid);
  // crewDomEvents(userObject.uid);
  navBar();
  // loginButton();
  // logoutButton();
  getCrews(userObject).then((crews) => showCrews(crews)); // IMPLELMENT .UID ON USEROBJECT WHEN DOMEVENTS GETS USED
};

export default startApp;

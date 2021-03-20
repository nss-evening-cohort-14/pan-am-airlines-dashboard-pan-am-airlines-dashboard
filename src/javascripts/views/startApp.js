import domBuilder from './domBuilder';
import navEvents from '../events/navEvents';
import home from './home';
import navBar from '../components/navBar';
import logoutButton from '../buttons/logoutButton';
// import addPlaneForm from '../components/forms/addPlaneForm';
import planeDomEvents from '../events/planeDomEvents';
import { getPlanes } from '../helpers/data/planeData';
import showPlanes from '../components/planes';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject);
  planeDomEvents();
  getPlanes().then((planes) => showPlanes(planes));
  logoutButton();
};

export default startApp;

import domBuilder from './domBuilder';
import navEvents from '../events/navEvents';
import home from './home';
import navBar from '../components/navBar';
import logoutButton from '../buttons/logoutButton';
import foodDomEvents from '../events/foodDomEvents';

const startApp = (userObject) => {
  domBuilder();
  home();
  navBar();
  navEvents(userObject);
  logoutButton();
  foodDomEvents();
};

export default startApp;

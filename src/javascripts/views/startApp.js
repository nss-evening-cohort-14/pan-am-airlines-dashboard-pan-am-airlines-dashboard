import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
// import planeDomEvents '../planeDomEvents';
// import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import showPlanes from '../components/planes';
import getPlanes from '../helpers/data/planeData';

const startApp = () => {
  domBuilder();
  navBar();
  // loginButton();
  logoutButton();
  // PUT ALL PLANES ON THE DOM //
  getPlanes().then((planes) => showPlanes(planes));
};

export default startApp;

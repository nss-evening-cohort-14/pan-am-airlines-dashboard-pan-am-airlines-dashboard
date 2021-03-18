import showPlanes from '../components/planes';
import getPlanes from '../helpers/data/planeData';

const navEvents = (uid) => {
  document.querySelector('#airport').addEventListener('click', () => {
    document.querySelector('#modal').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getPlanes(uid).then((airportsArray) => showPlanes(airportsArray));
  });
};
export default navEvents;

import showPlanes from '../components/planes';
import getPlanes from '../helpers/data/planeData';
import { showAirports } from '../components/airports';
import getAirports from '../helpers/data/airportData';

const navEvents = (uid) => {
  document.querySelector('#planes').addEventListener('click', () => {
    document.querySelector('#modal').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getPlanes(uid).then((planesArray) => showPlanes(planesArray));
  });
  document.querySelector('#airport').addEventListener('click', () => {
    document.querySelector('#modal').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getAirports(uid).then((airportsArray) => showAirports(airportsArray));
  });
};

export default navEvents;

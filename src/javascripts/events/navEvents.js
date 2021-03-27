import { showAirports } from '../components/airports';
import { showCrews } from '../components/crew';
import showFood from '../components/food';
import showPlanes from '../components/planes';
import { getAirports } from '../helpers/data/airportData';
import { getBaggage } from '../helpers/data/baggageData';
import { getCrews } from '../helpers/data/crewData';
import { getPlanes } from '../helpers/data/planeData';
import { getFood } from '../helpers/data/foodData';
import { showBaggage } from '../components/baggage';
import home from '../views/home';

const navEvents = () => {
  document.querySelector('#planes').addEventListener('click', () => {
    getPlanes().then((planesArray) => showPlanes(planesArray));
    document.querySelector('#form-container').innerHTML = '';
  });

  document.querySelector('#airport').addEventListener('click', () => {
    getAirports().then((airportsArray) => showAirports(airportsArray));
    document.querySelector('#form-container').innerHTML = '';
  });

  document.querySelector('#crew').addEventListener('click', () => {
    getCrews().then((crewsArray) => showCrews(crewsArray));
    document.querySelector('#form-container').innerHTML = '';
  });

  document.querySelector('#baggage').addEventListener('click', () => {
    getBaggage().then((baggageArray) => showBaggage(baggageArray));
    document.querySelector('#form-container').innerHTML = '';
  });

  document.querySelector('#foodService').addEventListener('click', () => {
    getFood().then((foodServiceArray) => showFood(foodServiceArray));
    document.querySelector('#form-container').innerHTML = '';
  });
  document.querySelector('#home-screen').addEventListener('click', () => {
    home();
    document.querySelector('#form-container').innerHTML = '';
    document.querySelector('#add-button').innerHTML = '';
  });
};

export default navEvents;

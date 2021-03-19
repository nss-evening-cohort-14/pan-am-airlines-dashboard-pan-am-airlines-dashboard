import { showAirports } from '../components/airports';
import { showBaggage } from '../components/baggage';
import { showCrews } from '../components/crew';
import { showFood } from '../components/food';
import showPlanes from '../components/planes';
import getAirports from '../helpers/data/airportData';
import { getBaggage } from '../helpers/data/baggageData';
import { getCrews } from '../helpers/data/crewData';
import getPlanes from '../helpers/data/planeData';
import getFood from '../helpers/data/foodData';

// NAV EVENTS
const navEvents = () => {
  document.querySelector('#planes').addEventListener('click', () => {
    getPlanes().then((planesArray) => showPlanes(planesArray));
  });

  document.querySelector('#airport').addEventListener('click', () => {
    getAirports().then((airportsArray) => showAirports(airportsArray));
  });

  document.querySelector('#crew').addEventListener('click', () => {
    getCrews().then((crewsArray) => showCrews(crewsArray));
  });

  document.querySelector('#baggage').addEventListener('click', () => {
    getBaggage().then((baggagesArray) => showBaggage(baggagesArray));
  });

  document.querySelector('#foodService').addEventListener('click', () => {
    getFood().then((foodServiceArray) => showFood(foodServiceArray));
  });
};

export default navEvents;

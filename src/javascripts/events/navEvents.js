import showPlanes from '../components/planes';
import { showCrews } from '../components/crew';
import { showBaggage } from '../components/forms/baggage';
import { showAirports } from '../components/airports';
// import getFoodService from '../components/foodServices'
import getPlanes from '../helpers/data/planeData';
import getAirports from '../helpers/data/airportData';
import getCrews from '../helpers/data/crewData';
import getBaggage from '../helpers/data/baggageData';
// import showFoodService from '../components/foodService';

// NAV EVENTS
const navEvents = (uid) => {
  document.querySelector('#planes').addEventListener('click', () => {
    getPlanes(uid).then((planesArray) => showPlanes(planesArray));
  });

  document.querySelector('#airport').addEventListener('click', () => {
    getAirports(uid).then((airportsArray) => showAirports(airportsArray));
  });

  document.querySelector('#crew').addEventListener('click', () => {
    getCrews(uid).then((crewsArray) => showCrews(crewsArray));
  });

  document.querySelector('#baggage').addEventListener('click', () => {
    getBaggage(uid).then((baggagesArray) => showBaggage(baggagesArray));
  });

  // document.querySelector('#foodService').addEventListener('click', () => {
  //   getFoodService(uid).then((foodServiceArray) => showFoodService(foodServiceArray));
  // });
};

export default navEvents;

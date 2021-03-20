import { showAirports } from '../components/airports';
import addAirportForm from '../components/forms/addAirportForm';
import { createAirport } from '../helpers/data/airportData';

const airportDomEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN AIRPLANE
    if (e.target.id.includes('add-airport-btn')) {
      addAirportForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AIRPORT
    if (e.target.id.includes('submit-airport')) {
      e.preventDefault();
      const airportObject = {
        airportName: document.querySelector('#airportName').value,
        airportImage: document.querySelector('#airportImage').value,
        airportLocation: document.querySelector('#airportLocation').value,
        uid
      };

      createAirport(airportObject, uid).then((airportsArray) => showAirports(airportsArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};
export default airportDomEvents;

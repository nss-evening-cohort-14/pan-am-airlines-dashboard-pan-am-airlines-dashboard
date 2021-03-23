import { showAirports } from '../components/airports';
import addAirportForm from '../components/forms/addAirportForm';
import editAirportForm from '../components/forms/editAiportForm';
import {
  createAirport, deleteAirport, updateAirport, getSingleAirport
} from '../helpers/data/airportData';

const airportDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING AN AIRPORT
    if (e.target.id.includes('add-airport-btn')) {
      addAirportForm();
    }
    // CLICK EVENT FOR DELETING AN AIRPORT
    if (e.target.id.includes('delete-airport')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteAirport(firebaseKey).then((airportsArray) => showAirports(airportsArray));
      }
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AIRPORT
    if (e.target.id.includes('submit-airport')) {
      e.preventDefault();
      const airportObject = {
        airportName: document.querySelector('#airportName').value,
        airportImage: document.querySelector('#airportImage').value,
        airportLocation: document.querySelector('#airportLocation').value,
      };

      createAirport(airportObject).then((airportsArray) => showAirports(airportsArray));
      document.querySelector('#form-container').innerHTML = '';
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR EDITING AIRPORT
    if (e.target.id.includes('update-airport-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const airportObject = {
        airportName: document.querySelector('#airportName').value,
        airportImage: document.querySelector('#airportImage').value,
        airportLocation: document.querySelector('#airportLocation').value,
      };

      updateAirport(firebaseKey, airportObject).then((airportsArray) => showAirports(airportsArray));
      document.querySelector('#form-container').innerHTML = '';
    }
    // CLICK EVENT FOR SHOWING FORM FOR EDITING AIRPORT
    if (e.target.id.includes('edit-airport')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleAirport(firebaseKey).then((airportObject));
      editAirportForm(airportObject);
    }
  });
};
export default airportDomEvents;

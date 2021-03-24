import { showCrews } from '../components/crew';
import addCrewForm from '../components/forms/addCrewForm';
import editCrewForm from '../components/forms/editCrewForm';
import {
  createCrew,
  deleteCrew,
  getSingleCrew,
  updateCrew
} from '../helpers/data/crewData';

const crewDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-crew-btn')) {
      addCrewForm();
    }

    if (e.target.id.includes('submit-crew-btn')) {
      e.preventDefault();
      const crewObject = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        crewTitle: document.querySelector('#crewTitle').value,
        imageUrl: document.querySelector('#imageUrl').value,
      };

      createCrew(crewObject).then((crewsArray) => showCrews(crewsArray));
      document.querySelector('#form-container').innerHTML = '';
    }

    if (e.target.id.includes('delete-crew-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to FIRE this crew member?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteCrew(firebaseKey).then((crewsArray) => showCrews(crewsArray));
      }
    }

    if (e.target.id.includes('edit-crew-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleCrew(firebaseKey).then((crewObject) => editCrewForm(crewObject));
    }

    if (e.target.id.includes('update-crew-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const crewObject = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        crewTitle: document.querySelector('#crewTitle').value,
        imageUrl: document.querySelector('#imageUrl').value,
      };

      updateCrew(firebaseKey, crewObject).then((crewsArray) => showCrews(crewsArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default crewDomEvents;

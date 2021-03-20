import { showCrews } from '../components/crew';
import addCrewForm from '../components/forms/addCrewForm';
import { createCrew } from '../helpers/data/crewData';

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

      createCrew(crewObject).then((crewArray) => showCrews(crewArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default crewDomEvents;

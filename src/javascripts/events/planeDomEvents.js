import addPlaneForm from '../components/forms/addPlaneForm';
import showPlanes from '../components/planes';
import { createPlane } from '../helpers/data/planeData';

const planeDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PLANE
    if (e.target.id.includes('add-plane-btn')) {
      addPlaneForm();
    }
    // CLICK EVENT FOR TARGETING AND SUBMITING SUBMIT PLANE //
    if (e.target.id.includes('submit-plane')) {
      e.preventDefault();
      const planeObject = {
        planeCapacity: document.querySelector('#planeCapacity').value,
        planeImage: document.querySelector('#planeImage').value,
        planeMake: document.querySelector('#planeMake').value,
        planeModel: document.querySelector('#planeModel').value
      };
      createPlane(planeObject).then((planesArray) => showPlanes(planesArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default planeDomEvents;

/* eslint-disable no-alert */
import addPlaneForm from '../components/forms/addPlaneForm';
import editPlaneForm from '../components/forms/editPlaneForm';
import showPlanes from '../components/planes';
import {
  createPlane,
  deletePlane,
  getSinglePlane,
  updatePlane
} from '../helpers/data/planeData';

const planeDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // ADD PLANE
    if (e.target.id.includes('add-plane-btn')) {
      addPlaneForm();
    }
    // DELETE PLANE
    if (e.target.id.includes('delete-plane')) {
      if (window.confirm('Want to delete this plane from our fleet?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePlane(firebaseKey).then((planesArray) => showPlanes(planesArray));
      }
    }
    // SUBMIT PLANE
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
    // EDIT PLANE
    if (e.target.id.includes('edit-plane-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSinglePlane(firebaseKey).then((planeObject) => editPlaneForm(planeObject));
    }
    // UPDATE PLANE
    if (e.target.id.includes('update-plane')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const planeObject = {
        planeCapacity: document.querySelector('#planeCapacity').value,
        planeImage: document.querySelector('#planeImage').value,
        planeMake: document.querySelector('#planeMake').value,
        planeModel: document.querySelector('#planeModel').value
      };
      updatePlane(firebaseKey, planeObject).then((planesArray) => showPlanes(planesArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default planeDomEvents;

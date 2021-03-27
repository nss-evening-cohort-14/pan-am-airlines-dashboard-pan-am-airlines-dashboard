/* eslint-disable no-alert */
import { showBaggage } from '../components/baggage';
import addBaggageForm from '../components/forms/addBaggageForm';
import editBaggageForm from '../components/forms/editBaggageForm';
import {
  createBaggage,
  deleteBaggage,
  getSingleBag,
  updateBaggage
} from '../helpers/data/baggageData';

const baggageDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-baggage-btn')) {
      addBaggageForm();
    }

    if (e.target.id.includes('submit-baggage-btn')) {
      e.preventDefault();
      const baggageObject = {
        baggageNumber: document.querySelector('#baggageNumber').value,
        baggageWeight: document.querySelector('#baggageWeight').value,
        baggageImage: document.querySelector('#baggageImage').value,
      };

      createBaggage(baggageObject).then((baggageArray) => showBaggage(baggageArray));
      document.querySelector('#form-container').innerHTML = '';
    }

    if (e.target.id.includes('edit-baggage-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleBag(firebaseKey).then((baggageObject) => editBaggageForm(baggageObject));
    }

    if (e.target.id.includes('delete-baggage-btn')) {
      if (window.confirm('Are you sure you want to delete this bag?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBaggage(firebaseKey).then((baggageArray) => showBaggage(baggageArray));
      }
    }

    if (e.target.id.includes('update-baggage-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const baggageObject = {
        baggageNumber: document.querySelector('#baggageNumber').value,
        baggageWeight: document.querySelector('#baggageWeight').value,
        baggageImage: document.querySelector('#baggageImage').value,
      };

      updateBaggage(firebaseKey, baggageObject).then((baggagesArray) => showBaggage(baggagesArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default baggageDomEvents;

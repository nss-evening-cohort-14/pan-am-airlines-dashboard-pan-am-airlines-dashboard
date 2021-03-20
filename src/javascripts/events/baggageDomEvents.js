/* eslint-disable no-alert */
import { showBaggage } from '../components/baggage';
import addBaggageForm from '../components/forms/addBaggageForm';
import { createBaggage, deleteBaggage } from '../helpers/data/baggageData';

const baggageDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn('hello');
    if (e.target.id.includes('delete-baggage')) {
      if (window.confirm('Are you sure you want to delete this bag?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBaggage(firebaseKey).then((baggageArray) => showBaggage(baggageArray));
      }
    }

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
  });
};

export default baggageDomEvents;

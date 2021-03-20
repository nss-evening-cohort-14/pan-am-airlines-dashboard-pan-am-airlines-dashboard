import { showBaggage } from '../components/baggage';
import addBaggageForm from '../components/forms/addBaggageForm';
import { createBaggage } from '../helpers/data/baggageData';

const bagDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-baggage-btn')) {
      addBaggageForm();
    }

    if (e.target.id.includes('submit-baggage-btn')) {
      e.preventDefault();
      const pinObject = {
        baggageNumber: document.querySelector('#baggageNumber').value,
        baggageWeight: document.querySelector('#baggageWeight').value,
        baggageImage: document.querySelector('#baggageImage').value,
      };

      createBaggage(pinObject).then((baggageArray) => showBaggage(baggageArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default bagDomEvents;

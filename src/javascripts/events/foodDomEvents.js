import 'firebase/auth';
import showFood from '../components/food';
import addFoodForm from '../components/forms/addFoodForm';
import { createFood } from '../helpers/data/foodData';

const foodDomEvents = (uid) => {
  // CLICK EVENT FOR SHOWING FORM FOR ADDING FOOD
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-food-btn')) {
      console.warn('CLICKED ADD FOOD BUTTON', e.target.id);
      addFoodForm();
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING FOOD
    if (e.target.id.includes('submit-food')) {
      e.preventDefault();
      const foodObject = {
        foodImage: document.querySelector('#foodImage').value,
        foodName: document.querySelector('#foodName').value,
        foodPrice: document.querySelector('#foodPrice').value,
        // uid: firebase.auth().currentUser.uid
      };
      console.warn(foodObject);

      createFood(foodObject, uid).then((foodArray) => showFood(foodArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default foodDomEvents;

import showFood from '../components/food';
import addFoodForm from '../components/forms/addFoodForm';
import { createFood, deleteFood } from '../helpers/data/foodData';

const foodDomEvents = () => {
  // CLICK EVENT FOR SHOWING FORM FOR ADDING FOOD
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-food-btn')) {
      addFoodForm();
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING FOOD
    if (e.target.id.includes('submit-food')) {
      e.preventDefault();
      const foodObject = {
        foodImage: document.querySelector('#foodImage').value,
        foodName: document.querySelector('#foodName').value,
        foodPrice: document.querySelector('#foodPrice').value,
      };

      createFood(foodObject).then((foodArray) => showFood(foodArray));
      document.querySelector('#form-container').innerHTML = '';
    }
    // CLICK EVENT FOR DELETING FOOD
    if (e.target.id.includes('delete-food')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteFood(firebaseKey).then((foodArray) => showFood(foodArray));
      }
    }
  });
};

export default foodDomEvents;

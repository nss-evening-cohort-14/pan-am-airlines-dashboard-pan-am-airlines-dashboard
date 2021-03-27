/* eslint-disable no-alert */
import showFood from '../components/food';
import addFoodForm from '../components/forms/addFoodForm';
import {
  createFood, deleteFood, getSingleFood, updateFood
} from '../helpers/data/foodData';
import editFoodForm from '../components/forms/editFoodForm';

const foodDomEvents = () => {
  // ADD FOOD
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-food-btn')) {
      document.querySelector('#form-container').innerHTML = '';
      addFoodForm();
    }
    // SUBMIT FOOD
    if (e.target.id.includes('submit-food-btn')) {
      e.preventDefault();
      const foodObject = {
        foodImage: document.querySelector('#foodImage').value,
        foodName: document.querySelector('#foodName').value,
        foodPrice: document.querySelector('#foodPrice').value,
      };

      createFood(foodObject).then((foodArray) => showFood(foodArray));
      document.querySelector('#form-container').innerHTML = '';
    }
    // EDIT FOOD
    if (e.target.id.includes('edit-food-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSingleFood(firebaseKey).then((foodObject) => editFoodForm(foodObject));
    }

    // UPDATE FOOD
    if (e.target.id.includes('update-food-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const foodObject = {
        foodImage: document.querySelector('#foodImage').value,
        foodName: document.querySelector('#foodName').value,
        foodPrice: document.querySelector('#foodPrice').value,
      };
      updateFood(firebaseKey, foodObject).then((foodArray) => showFood(foodArray));
      document.querySelector('#form-container').innerHTML = '';
    }

    // DELETE FOOD
    if (e.target.id.includes('delete-food-btn')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteFood(firebaseKey).then((foodArray) => showFood(foodArray));
      }
    }
  });
};

export default foodDomEvents;

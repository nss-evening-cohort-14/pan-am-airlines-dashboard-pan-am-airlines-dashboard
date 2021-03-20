import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getFood = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/foodServices.json`)
    .then((response) => {
      if (response.data) {
        const foodArray = Object.values(response.data);
        resolve(foodArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createFood = (foodObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/foodServices.json`, foodObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/foodServices/${response.data.name}.json`, body)
        .then(() => {
          getFood(uid).then((foodArray) => resolve(foodArray));
        });
    }).catch((error) => reject(error));
});

export { getFood, createFood };

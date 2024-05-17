/* eslint-disable object-curly-newline */
import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BAGGAGE CARDS
const getBaggage = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/baggages.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE BAG
const getSingleBag = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/baggages/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// CREATE BAGGAGE
const createBaggage = (baggageObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/baggages.json`, baggageObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/baggages/${response.data.name}.json`, body)
        .then(() => {
          getBaggage().then((baggageArray) => resolve(baggageArray));
        });
    }).catch((error) => reject(error));
});

const deleteBaggage = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/baggages/${firebaseKey}.json`)
    .then(() => getBaggage().then((baggageArray) => resolve(baggageArray)))
    .catch((error) => reject(error));
});

export { getBaggage, getSingleBag, createBaggage, deleteBaggage };

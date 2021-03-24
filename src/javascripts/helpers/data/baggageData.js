import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBaggage = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/baggages.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleBag = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/baggages/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

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

const updateBaggage = (firebaseKey, baggageObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/baggages/${firebaseKey}.json`, baggageObject)
    .then(() => getBaggage()).then((baggagesArray) => resolve(baggagesArray))
    .catch((error) => reject(error));
});

export {
  getBaggage,
  getSingleBag,
  createBaggage,
  deleteBaggage,
  updateBaggage
};

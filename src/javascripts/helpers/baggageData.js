import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BAGGAGE CARDS
const getBaggage = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/baggages.json`)
    .then((response) => {
      if (response.data) {
        const baggageArray = Object.values(response.data);
        resolve(baggageArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET SINGLE BAG
const getSingleBag = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/baggages/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getBaggage, getSingleBag };
// ?orderBy="uid"&equalTo="${uid}"

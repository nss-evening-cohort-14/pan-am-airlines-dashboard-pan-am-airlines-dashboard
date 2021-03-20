import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

// API CAll
const dbUrl = firebaseConfig.databaseURL;

// GET AIRPORTS
const getAirports = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/airports.json`)
    .then((response) => {
      if (response.data) {
        const airportArray = Object.values(response.data);
        resolve(airportArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// CREATE AIRPORTS

const createAirport = (airportObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/airports.json`, airportObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/airports/${response.data.name}.json`, body)
        .then(() => {
          getAirports(uid).then((airportsArray) => resolve(airportsArray));
        });
    }).catch((error) => reject(error));
});

export { getAirports, createAirport };

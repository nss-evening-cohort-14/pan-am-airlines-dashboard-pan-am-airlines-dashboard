import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

// API CAll
const dbUrl = firebaseConfig.databaseURL;

// GET AIRPORTS
const getAirports = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/airports.json`)
    .then((response) => {
      if (response.data) {
        const airportsArray = Object.values(response.data);
        resolve(airportsArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});
// DELETE AIRPORTS
const deleteAirport = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/airports/${firebaseKey}.json`)
    .then(() => getAirports().then((airportsArray) => resolve(airportsArray)))
    .catch((error) => reject(error));
});

// GET SINGLE AIRPORT
const getSingleAirport = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/airports/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// CREATE AIRPORTS

const createAirport = (airportObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/airports.json`, airportObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/airports/${response.data.name}.json`, body)
        .then(() => {
          getAirports().then((airportsArray) => resolve(airportsArray));
        });
    }).catch((error) => reject(error));
});
// EDIT AIRPORTS
const updateAirport = (firebaseKey, airportObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/airports/${firebaseKey}.json`, airportObject)
    .then(() => getAirports(firebase.auth().currentUser.uid)).then((airportsArray) => resolve(airportsArray))
    .catch((error) => reject(error));
});

export {
  getAirports, createAirport, deleteAirport, updateAirport,
  getSingleAirport
};

/* eslint-disable object-curly-newline */
import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET CREW CARDS
const getCrews = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/crews.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE CREW MEMBER
const getSingleCrew = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/crews/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// CREATE CREW MEMBER
const createCrew = (crewObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/crews.json`, crewObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/crews/${response.data.name}.json`, body)
        .then(() => {
          getCrews().then((crewArray) => resolve(crewArray));
        });
    }).catch((error) => reject(error));
});

const deleteCrew = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/crews/${firebaseKey}.json`)
    .then(() => getCrews().then((crewArray) => resolve(crewArray)))
    .catch((error) => reject(error));
});

// UPDATE CREW MEMBER
const updateCrew = (firebaseKey, crewObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/crews/${firebaseKey}.json`, crewObject)
    .then(() => getCrews()).then((crewsArray) => resolve(crewsArray))
    .catch((error) => reject(error));
});

export { getCrews, getSingleCrew, createCrew, deleteCrew, updateCrew };

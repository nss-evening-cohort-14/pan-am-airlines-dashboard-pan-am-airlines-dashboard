import axios from 'axios';
import firebaseConfig from './auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET PLANES //
const getPlanes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/planes.json`)
    .then((response) => {
      if (response.data) {
        const plansesArray = Object.values(response.data);
        resolve(plansesArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE PLANE //
const deletePlane = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/planes/${firebaseKey}.json`)
    .then(() => getPlanes().then((planesArray) => resolve(planesArray)))
    .catch((error) => reject(error));
});
// CREATE PLANES //
const createPlane = (planeObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/planes.json`, planeObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/planes/${response.data.name}.json`, body)
        .then(() => {
          getPlanes().then((plansesArray) => resolve(plansesArray));
        });
    }).catch((error) => reject(error));
});

export { getPlanes, createPlane, deletePlane };

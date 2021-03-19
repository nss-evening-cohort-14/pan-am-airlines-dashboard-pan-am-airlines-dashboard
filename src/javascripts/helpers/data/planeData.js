import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR BAGGAGE //

const dbUrl = firebaseConfig.databaseURL;

// GET PLANES //
const getPlanes = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/planes.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getPlanes;

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

export default getAirports;

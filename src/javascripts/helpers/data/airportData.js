import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

// API CAll
const dbUrl = firebaseConfig.databaseURL;

// GET AIRPORTS
const getAirports = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/airports.json?orderBy="uid"&equalTo="${uid}"`)
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

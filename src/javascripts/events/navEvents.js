import { showCrews, emptyCrews } from '../components/crews';
import getCrews from '../helpers/crewData';
import signOut from '../helpers/signOut';

// NAV CLICK EVENTS
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // SHOW CREW CARDS
  document.querySelector('#crew').addEventListener('click', () => {
    getCrews(uid).then((crewArray) => {
      if (crewArray.length) {
        showCrews(crewArray);
      } else {
        emptyCrews();
      }
    });
  });

  // AIRPORTS HERE

  // PLANES HERE

  // FOOD SERVICE HERE

  // BAGGAGE HERE
};

export default navigationEvents;

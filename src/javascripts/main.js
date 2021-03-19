import 'bootstrap';

import '../styles/main.scss';
import checkLoginStatus from './helpers/data/auth/auth';

const init = () => {
  checkLoginStatus();
};

init();

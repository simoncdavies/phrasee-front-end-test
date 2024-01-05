import { combineReducers } from 'redux';

import login from './login';
import patients from './patients';

const reducers = combineReducers({
  loginState: login,
  patientsState: patients
});

export default reducers;

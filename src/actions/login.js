import axios from 'axios';
import { patientListUpdate } from './patients';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST,
});

const loginUserSuccess = (username) => ({
  type: LOGIN_USER_SUCCESS,
  payload: username,
});

const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const loginUser = (userData, navigate) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());

    try {
      const response = await axios.post(`https://run.mocky.io/v3/3c2a2fcf-6148-48b9-aa81-0b8b3ac75fbc`, userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { data: { username, patients } } = response;
      dispatch(loginUserSuccess(username));
      dispatch(patientListUpdate(patients));
      navigate('/patients');
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
  };
};

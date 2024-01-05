import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/login'

const initialState = {
  username: '',
  password: '',
  userRequested: false,
  isLoggedIn: false,
  error: {}
};

const reducer = function (state = initialState, { type, payload = null }) {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        userRequested: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        username: payload,
        password: '',
        userRequested: false,
        isLoggedIn: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        username: '',
        password: '',
        userRequested: false,
        isLoggedIn: false,
        error: payload
      };
    default:
      return state;
  }
};

export default reducer;

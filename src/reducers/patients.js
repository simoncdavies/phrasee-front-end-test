import {
  PATIENT_LIST_UPDATE
} from '../actions/patients';

const initialState = {
  patients: []
};

const reducer = function (state = initialState, { type, payload = null }) {
  switch (type) {
    case PATIENT_LIST_UPDATE:
      return {
        patients: payload
      };
    default:
      return state;
  }
};

export default reducer;

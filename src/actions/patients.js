export const PATIENT_LIST_UPDATE = 'PATIENT_LIST_UPDATE';

export const patientListUpdate = (patientList) => ({
  type: PATIENT_LIST_UPDATE,
  payload: patientList,
});

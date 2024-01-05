import React from 'react';
import { connect } from 'react-redux';
import { friendlyDate } from '../../utils/dates';

const PatientType = ({ type, patients }) => {
  return (
    <>
      <main className="title">
        <h2>{type}</h2>
      </main>
      {
        patients.map(patient => <PatientData key={patient._id} patient={patient}/>)
      }
    </>
  );
}

const PatientData = ({ patient: { name, joined, last_visit_date, is_completed }}) => {
  return (<main className="patient">
    <p className="patient-name">Name: {name}</p>
    <p className="patient-joined">Joined: {friendlyDate(joined)}</p>
    <p className="patient-last-visit">Last Visit: {friendlyDate(last_visit_date)}</p>
    <p className="patient-completed">Completed: {is_completed ? 'Yes' : 'No'}</p>
  </main>);
}

const sortPatientsByDateAndName = (a, b) => {
  const dateComparison = new Date(b.last_visit_date) - new Date(a.last_visit_date);

  return dateComparison !== 0 ? dateComparison : a.name.localeCompare(b.name);
};

const Patients = ({ patientsState }) => {
  const { patients } = patientsState;
  const types = patients.map(patient => patient.type);
  const patientTypes = [...new Set(types)].sort();

  return (
    <>
      <main className="title">
        <h1>Patients:</h1>
      </main>
      {
        patientTypes.map(type => {
          const patientsByType = patients.filter(patient => patient.type === type);
          const patientsCompleted = patientsByType.filter(patient => !patient.is_completed);
          const sortedPatients = patientsCompleted.sort(sortPatientsByDateAndName);
          return (<PatientType key={type} type={type} patients={sortedPatients}/>);
        })
      }
    </>
  );
}

const mapStateToProps = (store) => ({
  patientsState: store.patientsState,
});

export default connect(mapStateToProps)(Patients);

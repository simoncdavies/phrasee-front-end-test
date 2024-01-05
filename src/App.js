import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Login from './pages/Login';
import Patients from './pages/Patients';

const App = ({ loginState }) => {
  const { isLoggedIn } = loginState;

  return (
    <>
      <header>
        <img src="./images/dhg_whole.png" alt="Digital Hospital Global" />
      </header>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/patients" element={isLoggedIn ? <Patients /> : <Navigate replace to={"/"} /> } />
      </Routes>
      <footer>
      </footer>
    </>
  );
}

const mapStateToProps = (store) => ({
  loginState: store.loginState,
});

export default connect(mapStateToProps)(App);

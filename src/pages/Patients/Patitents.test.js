import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../../reducers';
import Patients from './index';

xtest('renders patients list', () => {
  const initialState = {
    patientsState: [],
  };

  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/patients']}>
        <Patients/>
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Patients')).toBeInTheDocument();
});

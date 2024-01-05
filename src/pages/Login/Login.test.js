import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../../reducers';
import Login from './index';

xtest('renders login component', () => {
  const initialState = {
    loginState: { isLoggedIn: false },
  };

  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Login/>
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Username')).toBeInTheDocument();
});

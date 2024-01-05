import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';
import App from './App';

test('renders login page when not logged in', () => {
  const initialState = {
    loginState: { isLoggedIn: false },
  };

  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Username')).toBeInTheDocument();
});

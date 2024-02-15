import { configureStore } from '@reduxjs/toolkit';

import { authenticationReducer, setIsAuthenticated } from './reducers/authentication';
import { authorizationReducer, setIsAuthorized } from './reducers/authorization';
import { cocktailsReducer } from './reducers/cocktails';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    cocktails: cocktailsReducer,
    authorization: authorizationReducer,
  },
});

function initializeAuthState() {
  const isAuthenticated = !!localStorage.getItem('token');
  const isAuthorized = localStorage.getItem('role') === 'admin';

  store.dispatch(setIsAuthenticated(isAuthenticated));
  store.dispatch(setIsAuthorized(isAuthorized));
}

initializeAuthState();

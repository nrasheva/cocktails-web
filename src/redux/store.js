import { configureStore } from '@reduxjs/toolkit';

import { authenticationReducer, setIsAuthenticated } from './reducers/authentication';
import { authorizationReducer, setIsAuthorized } from './reducers/authorization';
import { cocktailsReducer } from './reducers/cocktails';
import { decodeToken, validateToken } from '../tools';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    cocktails: cocktailsReducer,
    authorization: authorizationReducer,
  },
});

function initializeAuthState() {
  const isAuthenticated = validateToken();
  const { isAdmin } = decodeToken();

  store.dispatch(setIsAuthenticated(isAuthenticated));
  store.dispatch(setIsAuthorized(isAdmin));
}

initializeAuthState();

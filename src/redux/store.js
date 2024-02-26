import { configureStore } from '@reduxjs/toolkit';

import { authenticationReducer, setIsAuthenticated } from './reducers/authentication';
import { authorizationReducer } from './reducers/authorization';
import { cocktailsReducer } from './reducers/cocktails';
import { validateToken } from '../tools';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    cocktails: cocktailsReducer,
    authorization: authorizationReducer,
  },
});

function initializeAuthState() {
  const isAuthenticated = validateToken();

  store.dispatch(setIsAuthenticated(isAuthenticated));
}

initializeAuthState();

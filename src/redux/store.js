import { configureStore } from '@reduxjs/toolkit';

import { authenticationReducer } from './reducers/authentication';
import { authorizationReducer } from './reducers/authorization';
import { cocktailsReducer } from './reducers/cocktails';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    cocktails: cocktailsReducer,
    authorization: authorizationReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';

import { authenticationReducer } from './reducers/authentication';
import { cocktailsReducer } from './reducers/cocktails';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    cocktails: cocktailsReducer,
  },
});

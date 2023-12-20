import { configureStore } from '@reduxjs/toolkit';

import { cocktailsReducer } from './reducers/cocktails';

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});

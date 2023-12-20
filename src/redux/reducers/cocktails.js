import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cocktails: [],
};

export const cocktailSlice = createSlice({
  initialState,
  name: 'cocktails',
  reducers: {
    resetCocktails: () => initialState,
    setCocktails: (state, action) => {
      state.cocktails = action.payload;
    },
  },
});

export const { resetCocktails, setCocktails } = cocktailSlice.actions;

export const cocktailsReducer = cocktailSlice.reducer;

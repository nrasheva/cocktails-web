import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
};

export const authorizationSlice = createSlice({
  initialState,
  name: 'authorization',
  reducers: {
    resetAuthorization: () => initialState,
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    },
  },
});

export const { resetAuthorization, setIsAuthorized } = authorizationSlice.actions;

export const authorizationReducer = authorizationSlice.reducer;

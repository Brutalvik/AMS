import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, isAuthenticated: false, error: [] };

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const registerActions = logicSlice.actions;

export default logicSlice;

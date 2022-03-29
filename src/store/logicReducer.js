import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isAuthenticated: false,
  message: [],
  loading: false,
};

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
    setMessage(state, action) {
      state.message = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const logicActions = logicSlice.actions;

export default logicSlice;

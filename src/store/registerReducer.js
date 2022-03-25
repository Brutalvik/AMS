import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: [] };

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const registerActions = registerSlice.actions;

export default registerSlice;

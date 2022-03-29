import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: [],
  loading: false,
  active: "register",
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const logicActions = logicSlice.actions;

export default logicSlice;

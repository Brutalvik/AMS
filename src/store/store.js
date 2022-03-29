import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./registerReducer";
import logicSlice from "./logicReducer";
import authSlice from "./authReducer";

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    logic: logicSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

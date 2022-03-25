import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./registerReducer";
import logicSlice from "./logicReducer";

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    logic: logicSlice.reducer,
  },
});

export default store;

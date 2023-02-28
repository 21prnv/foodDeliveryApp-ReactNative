import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import restraurentReducer from "./features/restraurentSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restraurent: restraurentReducer,
  },
});

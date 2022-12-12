import { configureStore } from "@reduxjs/toolkit";
import shopsReducer from "./components/shopsSlice";
export default configureStore({
  reducer: {
    shops: shopsReducer,
  },
});
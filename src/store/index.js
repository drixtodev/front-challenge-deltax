import { configureStore } from "@reduxjs/toolkit";
import petReducers from "./slices/petSlice";

export default configureStore({
  reducer: {
    pets: petReducers,
  },
});

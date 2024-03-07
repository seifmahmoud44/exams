import { configureStore } from "@reduxjs/toolkit";
import examSlice from "./examSlice";
export const store = configureStore({
  reducer: { examSlice },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

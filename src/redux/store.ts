import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./feature/Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    User: userSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/Auth/AuthSlice";
import {  baseApi } from "./API/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

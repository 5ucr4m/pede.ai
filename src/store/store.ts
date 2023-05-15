import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer from "./features/Auth/authSlice";

import { storeApi } from "./services/storeApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [storeApi.reducerPath]: storeApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [composeWithDevTools({})],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

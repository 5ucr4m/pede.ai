import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "@store/services/authApi";

export type AuthSlice = {
  email: string;
  token: string;
  token_date: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  isAuthenticated: boolean;
};

const initialState: AuthSlice = {
  email: "",
  token: "",
  token_date: "",
  status: "idle",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Partial<AuthSlice>>) => {
      state.isAuthenticated =
        action.payload.isAuthenticated || state.isAuthenticated;
      state.email = action.payload.email || state.email;
      state.token = action.payload.token || state.token;
      state.token_date = action.payload.token_date || state.token_date;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = "";
      state.token = "";
      state.token_date = "";
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.enviarToken.matchPending,
        (state: AuthSlice) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        authApi.endpoints.enviarToken.matchFulfilled,
        (state: AuthSlice, { payload, meta }: any) => {
          state.email = meta.arg.originalArgs;
          state.token = payload.token;
          state.token_date = payload.token_date;
          state.status = "succeeded";
        }
      );
  },
});

export const { setData, logout } = authSlice.actions;

export const selectAuthData = (state: { auth: AuthSlice }) => state.auth;

export default authSlice.reducer;

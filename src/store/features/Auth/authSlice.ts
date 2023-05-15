import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

type AuthSlice = {
  email: string;
  token: string;
  token_date: string;
};

const initialState: AuthSlice = {
  email: "john.doe@email.com",
  token: "123456",
  token_date: "202305161036",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<AuthSlice>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.token = action.payload.token_date;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { setData } = authSlice.actions;

export const selectAuthData = (state: RootState) => state.auth;

export default authSlice.reducer;

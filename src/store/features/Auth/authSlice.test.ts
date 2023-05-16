import { configureStore } from "@reduxjs/toolkit";
import authReducer, {
  setData,
  logout,
  selectAuthData,
  AuthSlice,
} from "./authSlice";

import { storeApi } from "@store/services/storeApi";

describe("auth reducer", () => {
  const initialState: AuthSlice = {
    isAuthenticated: false,
    email: "",
    token: "",
    token_date: "",
    status: "idle",
  };

  it("should handle initial state", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  const examplePayload: AuthSlice = {
    isAuthenticated: true,
    email: "jonh.doe@email.com",
    token: "123456",
    token_date: "202305171036",
    status: "idle",
  };

  it("should handle setData", () => {
    const actual = authReducer(initialState, setData(examplePayload));
    expect(actual.isAuthenticated).toEqual(examplePayload.isAuthenticated);
    expect(actual.email).toEqual(examplePayload.email);
    expect(actual.token).toEqual(examplePayload.token);
    expect(actual.token_date).toEqual(examplePayload.token_date);
  });

  it("should handle logout", () => {
    const actual = authReducer(examplePayload, logout());
    expect(actual).toEqual(initialState);
  });
});

describe("auth selectors", () => {
  const store = configureStore({
    reducer: { auth: authReducer, storeApi: storeApi.reducer },
  });

  const state = store.getState();

  it("should return the auth state", () => {
    expect(selectAuthData(state)).toEqual(state.auth);
  });
});

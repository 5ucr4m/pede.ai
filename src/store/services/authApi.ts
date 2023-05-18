import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiUrls } from "@src/config/api";

export interface AuthResponse {
  token: string;
  token_date: string;
}

export interface EmailPayload {
  email: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.base }),
  endpoints: (builder) => ({
    enviarToken: builder.mutation<
      { token: string; token_date: string },
      string
    >({
      query: (email) => ({
        url: "enviarToken",
        method: "POST",
        body: { email: email.toLowerCase() },
      }),
    }),
  }),
});

export const { useEnviarTokenMutation } = authApi;

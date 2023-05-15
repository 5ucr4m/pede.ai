import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ApiUrls } from "@src/config/api";
import { RootState } from "@store/store";

export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ApiUrls.base,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      const token_date = (getState() as RootState).auth.token_date;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        headers.set("Authorization-token-expiration", token_date);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getStoreData: builder.query<any, null>({
      query: () => ApiUrls.store,
    }),
  }),
});

export const { useGetStoreDataQuery, useLazyGetStoreDataQuery } = storeApi;

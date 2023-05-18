import axios, { AxiosError } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ApiUrls } from "@config/api";
import { RootState } from "@store/store";

import { logout } from "../Auth/authSlice";

export interface Items {
  id: string;
  title: string;
  description: string;
  tag_new: number;
  img: string;
  size: string;
  price: number;
  discount_price: number;
  tag_discount: number;
}

interface Category {
  name_category: string;
  itens: Items[];
}

export interface StoreSlice {
  _id: string;
  name_company: string;
  time_delivery: string;
  banner: string;
  logo: string;
  data: Category[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: StoreSlice = {
  _id: "",
  name_company: "",
  time_delivery: "",
  banner: "",
  logo: "",
  data: [],
  status: "idle",
  error: null,
};

export const fetchStore = createAsyncThunk(
  "store/fetchStore",
  async (_, { getState, dispatch }) => {
    try {
      const { token, token_date } = (getState() as RootState).auth;
      const response = await axios.get(ApiUrls.store, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Authorization-token-expiration": token_date,
        },
      });

      return response.data.data;
    } catch (err: AxiosError | any) {
      if (err.response && err.response.status === 401) {
        dispatch(logout());
      }
    }
  }
);

const storeSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStore.fulfilled, (state, action) => {
        state._id = action.payload._id;
        state.name_company = action.payload.name_company;
        state.time_delivery = action.payload.time_delivery;
        state.banner = action.payload.banner;
        state.logo = action.payload.logo;
        state.status = "succeeded";
        state.data = action.payload.categories[0];
      })
      .addCase(fetchStore.rejected, (state) => {
        state.status = "failed";
        state.error = "Falha ao carregar a loja";
      });
  },
});

export const selectStoreData = (state: { store: StoreSlice }) => {
  const { data, ...rest } = state.store;
  return rest;
};
export const selectStoreCategories = (state: { store: StoreSlice }) => {
  return state.store.data.map((category) => category.name_category);
};
export const selectStoreItems = (state: { store: StoreSlice }) => {
  return state.store.data;
};

export default storeSlice.reducer;

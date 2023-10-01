import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_lim = 16;

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_BASE_ENDPOINT
      }/products?limit=${char_lim}&skip=${page * char_lim}`
    );
    return res.data.products;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: "",
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = "succeeded";
      state.page += 1;

      if (action.payload.length < char_lim) {
        state.hasNextPage = false;
      }
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default productsSlice.reducer;

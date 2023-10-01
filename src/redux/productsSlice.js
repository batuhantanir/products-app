import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
  const res =  await axios.get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/products?limit=20`)
  return res.data.products
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default productsSlice.reducer;

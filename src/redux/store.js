import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import categoriesSlice from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
  },
});

export default store;

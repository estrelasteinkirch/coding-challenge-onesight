import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/recipeList/categoriesSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

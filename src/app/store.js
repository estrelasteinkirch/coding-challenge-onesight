import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/recipeList/categoriesSlice";
import recipesReducer from "../features/recipeList/recipesSlice";
import recipeDetailsReducer from "../features/recipeDetails/recipeDetailsSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
});

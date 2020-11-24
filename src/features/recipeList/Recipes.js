import { useSelector, useDispatch } from "react-redux";
import { saveCategoriesAsync, selectCategories } from "./categoriesSlice";
import { saveRecipesAsync, selectRecipes } from "./recipesSlice";
import Select from "react-select";
import { useEffect } from "react";
import Recipe from "./Recipe";

export default function Recipes() {
  const categories = useSelector(selectCategories);
  const recipes = useSelector(selectRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveCategoriesAsync());
  }, [dispatch]);

  return (
    <div>
      <Select
        options={categories}
        onChange={(option) => dispatch(saveRecipesAsync(option.value))}
      />
      <table>
        
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
        
      </table>
    </div>
  );
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../components/css/MuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import {
  selectRecipeDetails,
  saveRecipeDetailsAsync,
} from "../recipeDetails/recipeDetailsSlice";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const recipeDetails = useSelector(selectRecipeDetails);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(saveRecipeDetailsAsync(id));
  }, [dispatch, id]);

  if (!recipeDetails) return null;

  const {
    name,
    category,
    thumb,
    youtube,
    instructions,
    ingredients,
  } = recipeDetails;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>{name}</h1>
        <p>{category}</p>
        <img src={thumb} alt={name} />
        <a href={youtube} rel="noreferrer" target="_blank">
          Youtube
        </a>

        <table>
          <thead>
            <tr>
              <th colSpan="2">Ingredientes</th>
              <th>Modo de Preparo</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => {
              return (
                <tr>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.measure}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Instruções</p>
        <p>{instructions}</p>
      </ThemeProvider>
    </div>
  );
}

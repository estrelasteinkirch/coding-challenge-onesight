import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./app/PrivateRoute";
import LoginPage from "./features/login/LoginPage";
import RecipeDetailsPage from "./features/recipeDetails/RecipeDetailsPage";
import RecipesPage from "./features/recipeList/RecipesPage";
import Navbar from "./components/Navbar";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <PrivateRoute path="/receitas/:id">
            <RecipeDetailsPage />
          </PrivateRoute>
          <PrivateRoute path="/receitas">
            <RecipesPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

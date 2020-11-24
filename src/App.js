import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Recipes from "./features/recipeList/Recipes";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/receitas/:id">
            <h2>Receita Número 1</h2>
          </Route>
          <Route path="/receitas">
            <Recipes />
          </Route>
          <Route path="/">
            <Typography variant="h1" gutterBottom>
              Login
            </Typography>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

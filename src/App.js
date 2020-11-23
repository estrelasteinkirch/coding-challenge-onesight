import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/receitas/:id"><h2>Receita Número 1</h2></Route>
          <Route path="/receitas"><h2>Lista de Receitas</h2></Route>
          <Route path="/"><h2>Login</h2></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

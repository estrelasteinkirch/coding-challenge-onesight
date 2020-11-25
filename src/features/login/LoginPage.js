import { Box, Button, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLogin, selectLogin } from "./loginSlice";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import theme from "../../css/MuiTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLogin);

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = false;
    if (user !== "admin" || password !== "admin") {
      errors = true;
      setFormError(true);
    }
    if (!errors) dispatch(setLogin(true));
  };

  return loggedIn ? (
    <Redirect to="/receitas" />
  ) : (
    <div>
      <form
        className={classes.root}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        {formError ? (
          <Box component="span">Usuário ou Senha Incorretos</Box>
        ) : null}
        <TextField
          label="Usuário"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <TextField
          label="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Fazer Login</Button>
      </form>
    </div>
  );
}

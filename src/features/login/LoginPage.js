import { Box, Button, Container, Grid, Snackbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLogin, selectLogin } from "./loginSlice";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import theme from "../../css/MuiTheme";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 300,
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
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        {formError ? (
          <Grid item xs={12}>
            <Alert elevation={3} severity="error">
              Usuário ou Senha Incorretos!
            </Alert>
          </Grid>
        ) : null}
        <Grid container item justify="center" xs={12}>
          <TextField
            label="Usuário"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <TextField
            label="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Fazer Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

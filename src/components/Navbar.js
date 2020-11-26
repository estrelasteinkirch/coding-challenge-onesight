import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogin } from "../features/login/loginSlice";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: "Oleo Script Swash Caps",
    // fontSize: 1.5rem,
  },
  root: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const loggedIn = useSelector(selectLogin);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Receitaria
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/receitas"
            disabled={!loggedIn}
          >
            Receitas
          </Button>
          {loggedIn ? (
            <Button color="inherit" onClick={() => dispatch(setLogin(false))}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

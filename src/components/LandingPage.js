import React from "react";
import Yellow_Side from "../img/Yellow_Side.jpg";

// material UI imports
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../index.css";
import Footer from "./Footer";
import NavBarNoSearch from "./NavBarNoSearch";

// material UI ////////////////////////////////
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Simmr
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${Yellow_Side})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LandingPage = props => {
  const classes = useStyles();

  return (
    <div className="logInAnimation">
      <NavBarNoSearch />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={process.env.PUBLIC_URL + "/Logo.jpg"} height="70px" />
            <Typography component="h1" variant="h5">
              👋🏾 Welcome! Sign up to see your recipes or upload a new one.
            </Typography>
            <Typography component="h1" variant="h5">
              New here? Sign up to show off your delicious work or
              to browse recipes.
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => props.history.push("./login")}
            >
              Sign in
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => props.history.push("./register")}
            >
              Sign Up
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;

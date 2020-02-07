import React, { useState } from "react";
import Axios from "axios";
import img from "../img/Yellow_Side.jpg";
// material UI imports
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavBarNoSearch from "./NavBarNoSearch";
import Footer from "./Footer";
import "../index.css";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${img})`,
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
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
// material UI ////////////////////////////////

const SignUp = props => {
  const classes = useStyles();

  const [userReg, setUserReg] = useState({
    name: "",
    username: "",
    password: "",
    location: "",
    contact_info: ""
  });
  const handleChanges = (e) => {
    setUserReg({
      ...userReg,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://simmr.herokuapp.com/api/chefs/register", userReg)
      .then(res => {
        console.log("new user registered", res);
        props.history.push("/login");
      })
      .catch(err => {
        console.log("could not register new user", err);
      });
    setUserReg({
      name: "",
      username: "",
      password: "",
      location: "",
      contact_info: ""
    });
  };

  return (
    <div className="logInAnimation">
      <NavBarNoSearch />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={process.env.PUBLIC_URL + "/Logo.jpg"} height="70px" />
            <Typography component="h1" variant="h5"></Typography>
            <Typography component="h1" variant="h5">
              👋🏾 Welcome! Sign up to start posting your
            </Typography>
            <Typography component="h1" variant="h5">
              recipes and connect with potential clients.
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} Validate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                color="secondary"
                onChange={handleChanges}
                value={userReg.name}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                color="secondary"
                onChange={handleChanges}
                value={userReg.username}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                onChange={handleChanges}
                value={userReg.password}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="location"
                label="Zipcode"
                type="number"
                id="location"
                color="secondary"
                onChange={handleChanges}
                value={userReg.location}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contact_info"
                label="Phone Number"
                type="tel"
                id="contact_info"
                color="secondary"
                onChange={handleChanges}
                value={userReg.contact_info}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2" color="secondary">
                    {"Already have an account? Sign in here"}
                  </Link>
                </Grid>
              </Grid>
            </form>

            <Footer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import Axios from 'axios';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import img from "../img/Yellow_Side.jpg";
import NavBar from "./NavBar";
import Footer from './Footer';


import "../index.css";

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
    height: "73vh"
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

export default function Login(props) {
  const classes = useStyles();
  const [ userLog, setUserLog ] = useState({
    username: '',
    password: ''
  });
  const handleChanges = (e) => {
    setUserLog({
      ...userLog,
      [e.target.name]: e.target.value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('https://simmr.herokuapp.com/api/chefs/login', userLog)
      .then(res => {
        console.log('user has logged in', res)
        localStorage.setItem('token', res.data.token)
        props.history.push('/home')
      })
      .catch(err => {
        console.log('user FAILED to log in', err)
      })
  };

  return (
    <div className="logInAnimation">
       <NavBar /> 
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={process.env.PUBLIC_URL + "/Logo.jpg"} height="70px" />
            <Typography component="h1" variant="h5">
              👋🏾 Welcome! Sign in to see your recipes
            </Typography>
            <Typography component="h1" variant="h5">
              or upload a new one.
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} Validate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                color="secondary"
                onChange={handleChanges}
                value={userLog.username}
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
                value={userLog.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2" color="secondary">
                    {"Don't have an account? Sign Up"}
                  </Link>
                  <br/>
                  <br/>
                  <Link href="/home" variant="body2" color="secondary">
                    {"Or click here if you just want to view recipes!"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
        
      </Grid>
      <Footer />
    </div>
  );
}

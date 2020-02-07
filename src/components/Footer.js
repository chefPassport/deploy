import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import "../index.css";

function Copyright() {
  return (
    <Typography variant="body2" className="textColor" align="center">
      {"Copyright © "}
      <Link
        color={"inherit"}
        style={{ textDecoration: "none" }}
        className="textColor"
      >
        Simmr
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className="logInAnimation">
      <footer className={classes.footer}>
        <div align="center">
          <img src={process.env.PUBLIC_URL + "/Logo.jpg"} height="35px" />
        </div>
        <div align="center">
        <Button color="inherit">
        <Link
          exact={true}
          to="/home"
          style={{ textDecoration: "none" }}
          className="textColor"
        >
          Home
        </Link>
      </Button>
      <Button
      edge="end"
      aria-label="account of current user"
      color="inherit"
    >
      <Link
        exact={true}
        to="/gallery"
        style={{ textDecoration: "none" }}
        className="textColor"
      >
        Gallery
      </Link>
    </Button>
      <Button
        edge="end"
        aria-label="account of current user"
        color="inherit"
      >
        <Link
          exact={true}
          to="/profile"
          style={{ textDecoration: "none" }}
          className="textColor"
        >
          Profile
        </Link>
      </Button>
      <Button
        edge="end"
        aria-label="account of current user"
        color="inherit"
      >
        <Link
          exact={true}
          to="/"
          style={{ textDecoration: "none" }}
          className="textColor"
        >
          Sign In/Sign Up
        </Link>
      </Button>
      <Button
        edge="end"
        aria-label="account of current user"
        color="inherit"
      >
        Sign Out
      </Button>
        </div>
        <Copyright />
      </footer>
    </div>
  );
}

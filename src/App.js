import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

//Component Imports
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import RecipePage from "./components/homePage_components/recipePage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/gallery" component={Gallery} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home/recipe/:id" component={RecipePage} />
        <Route exact path="/home" component={HomePage} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

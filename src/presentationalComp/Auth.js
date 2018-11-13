import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Auth = () => {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Auth;

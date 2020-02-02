import React from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME, SIGN_IN } from "../../constants/routes";

export const PublicRoute = ({component: Component, restricted, authed, ...rest}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      authed && restricted ?
        <Redirect to={HOME} />
        : <Component {...props} />
    )} />
  );
};
export const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      authed  ?
        <Component {...props} />
        : <Redirect to={SIGN_IN} />
    )} />
  );
};

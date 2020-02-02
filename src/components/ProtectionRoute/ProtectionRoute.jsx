import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME, SIGN_IN } from "../../constants/routes";
import { AppContext } from "../Session/withAuthenticationContext";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const authed = useContext(AppContext);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        authed.isAuthorized && restricted ? (
          <Redirect to={HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const authed = useContext(AppContext);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        authed.isAuthorized ? <Component {...props} /> : <Redirect to={SIGN_IN} />
      }
    />
  );
};

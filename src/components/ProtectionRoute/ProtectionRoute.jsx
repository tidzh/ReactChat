import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME, SIGN_IN } from "../../constants/routes";
import { AppContext } from "../Session/withAuthenticationContext";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const globalContext = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={props =>
        globalContext.isAuthorized && restricted ? (
          <Redirect to={HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const globalContext = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={props =>
        globalContext.isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={SIGN_IN} />
        )
      }
    />
  );
};

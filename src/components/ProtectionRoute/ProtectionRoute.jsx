import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME, SIGN_IN } from "../../constants/routes";
import { AppContext } from "../Session/withAuthenticationContext";
import { ProgressLine } from "../common/Progress/Progress";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const authed = useContext(AppContext);
  return (
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
  if (authed.isAuthorized === null) {
    return <ProgressLine />;
  }
  return (
    <Route
      {...rest}
      render={props =>
        authed.isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={SIGN_IN} />
        )
      }
    />
  );
};

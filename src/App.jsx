import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./index.scss";
import * as ROUTES from "./constants/routes";
import SignInPageContainer from "./pages/SignInPage/SignInPageContainer";
import SignUpPageContainer from "./pages/SignUpPage/SignUpPageContainer";
import DialogContainer from "./components/Dialog/DialogContainer";
import ConfirmPageContainer from "./pages/ConfirmPage/ConfirmPageContainer";
import withAuthentication from "./components/Session/withAuthentication";
import {
  PrivateRoute,
  PublicRoute
} from "./components/ProtectionRoute/ProtectionRoute";

const App = ({ isAuthorized }) => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          component={HomePage}
          path={ROUTES.HOME}
          authed={isAuthorized}
        />
        <Route path={ROUTES.DIALOG} component={DialogContainer} />
        <PublicRoute
          component={SignUpPageContainer}
          path={ROUTES.SIGN_UP}
          authed={isAuthorized}
          restricted={true}
        />
        <PublicRoute
          component={SignInPageContainer}
          path={ROUTES.SIGN_IN}
          authed={isAuthorized}
          restricted={true}
        />
        <PublicRoute
          component={ConfirmPageContainer}
          path={ROUTES.CONFIRM}
          authed={isAuthorized}
          restricted={true}
        />
      </Switch>
    </Router>
  );
};
export default withAuthentication(App);

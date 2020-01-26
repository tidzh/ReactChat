import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./index.scss";
import * as ROUTES from "./constants/routes";
import SignInPageContainer from "./pages/SignInPage/SignInPageContainer";
import SignUpPageContainer from "./pages/SignUpPage/SignUpPageContainer";

const App = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPageContainer} />
      <Route path={ROUTES.SIGN_IN} component={SignInPageContainer} />
    </Switch>
  </Router>
);

export default App;

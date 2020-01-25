import React from "react";
import { withFirebase } from "./components/Firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPageContainer from "./pages/SignUpPage/SignUpPageContainer";
import './index.scss'

import * as ROUTES from './constants/routes';
import SignInPageContainer from "./pages/SignInPage/SignInPageContainer";


// const App = props => {
//
//   // const storage = props.firebase.storage;
//   // const files = [ 'ava-1.jpg', 'ava-2.jpg' ];
//   // files.map( filename => {
//   //   storage
//   //     .ref( `/assets/img/avatar/${filename}` )
//   //     .getDownloadURL()
//   //     .then( url => {
//   //       console.log( "Got download url: ", url );
//   //     });
//   // });
//   //
//   //
//   // props.firebase.users().on("value", snapshot => {
//   //   console.log(snapshot.val());
//   // });
// };

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPageContainer} />
      <Route path={ROUTES.SIGN_IN} component={SignInPageContainer} />
    </Switch>
  </Router>
);

export default withFirebase(App);

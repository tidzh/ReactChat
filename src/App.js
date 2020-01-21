import React from "react";
import Home from "./pages/Home/Home";
import { withFirebase } from "./components/Firebase";

const App = props => {
  props.firebase.users().on("value", snapshot => {
    console.log(snapshot.val());
  });

  return <Home />;
};

export default withFirebase(App);

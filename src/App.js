import React from 'react';
import Home from "./pages/Home/Home";
import {withFirebase} from "./components/Firebase";



const App  = props => {

    console.log(props)

  return (
  <Home/>
  );
};

export default withFirebase(App);

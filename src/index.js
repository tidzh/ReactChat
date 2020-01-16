import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import Firebase, { FirebaseContext } from './components/Firebase';
import {Provider} from "react-redux";
import store from "./redux/store";


ReactDOM.render(
    <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
        <App/>
    </FirebaseContext.Provider>
    </Provider>,
     document.getElementById('root'));


serviceWorker.unregister();

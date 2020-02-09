import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import Users from "./reducers/users";
import User from "./reducers/user";
import Auth from "./reducers/auth";
import Dialog from "./reducers/dialog";

const reducers = combineReducers({
  auth: Auth,
  users: Users,
  user: User,
  dialog: Dialog,
  form: formReducer,
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import auth from "./reducers/auth";
import users from "./reducers/users";
import user from "./reducers/user";

const reducers = combineReducers({
  auth: auth,
  users: users,
  user: user,
  form: formReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

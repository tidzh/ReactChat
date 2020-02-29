import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import Users from "./reducers/users";
import User from "./reducers/user";
import Auth from "./reducers/auth";
import DialogHistory from "./reducers/dialogHistory";

const reducers = combineReducers({
  auth: Auth,
  users: Users,
  user: User,
  dialogHistory: DialogHistory,
  form: formReducer,
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

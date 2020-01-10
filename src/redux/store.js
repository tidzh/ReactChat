import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import auth from "./reducers/auth";


const reducers = combineReducers( {
    auth: auth,
    form: formReducer
});


export default createStore(reducers, applyMiddleware(thunk));
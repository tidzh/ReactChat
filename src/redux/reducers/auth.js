import {
  IS_AUTH_USER,
  SET_USER_DATA,
  SET_USER_INPUT
} from "../../constants/actions";

const initialState = {
  email: "",
  name: "",
  password: "",
  ava: ""
  // isAuth:false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INPUT:
      return { ...state, ...action.value };
    case SET_USER_DATA:
      return { ...state, email: "", password: "", isAuth: true };
    case IS_AUTH_USER:
      return {
        ...state,
        email: action.email,
        name: action.name,
        ava: action.ava,
        isAuth: action.flag
      };
    default:
      return state;
  }
};

export default Auth;

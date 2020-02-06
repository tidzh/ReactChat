import {
  REGISTER_USER,
  SET_SESSION,
  SET_USER_INFO
} from "../../constants/actions";

const initialState = {
  profile: [],
  isRegistered: false,
  isAuthorized: null,
  isFetching: false
};

const Auth = (state = initialState, action) => {
  const { email, uid} = {payload : null};
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, profile: {...state.profile, email, uid }, isRegistered: true };
    case SET_USER_INFO:
      return {...state, profile:{...action.payload}};
    case SET_SESSION: {
      return { ...state, isAuthorized: action.flag };
    }
    default:
      return { ...state };
  }
};
export default Auth;

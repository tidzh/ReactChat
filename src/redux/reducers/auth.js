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
  switch (action.type) {
    case REGISTER_USER:
      const { email, uid} = action.payload;
      return { ...state, profile: {...state.profile, email, uid }, isRegistered: false };
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

import {
  REGISTER_USER,
  SET_SESSION,
  SET_USER_INFO,
  UPDATE_USER_AVATAR
} from "../../constants/actions";

const initialState = {
  authorizedUser: {},
  isRegistered: false,
  isAuthorized: null,
  isFetching: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const { email, uid } = action.payload;
      return {
        ...state,
        authorizedUser: { ...state.authorizedUser, email, uid },
        isRegistered: true
      };
    case SET_USER_INFO:
      return { ...state, authorizedUser: { ...action.payload } };
    case SET_SESSION: {
      return { ...state, isAuthorized: action.flag };
    }
    case UPDATE_USER_AVATAR: {
      return {
        ...state,
        authorizedUser: { ...state.authorizedUser, photoURL: action.photoURL }
      };
    }
    default:
      return { ...state };
  }
};
export default Auth;

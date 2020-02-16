import {
  REGISTER_USER,
  SET_SESSION,
  SET_USER_INFO,
  UPDATE_USER_AVATAR
} from "../../constants/actions";

const initialState = {
  profile: {},
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
        profile: { ...state.profile, email, uid },
        isRegistered: true
      };
    case SET_USER_INFO:
      return { ...state, profile: { ...action.payload } };
    case SET_SESSION: {
      return { ...state, isAuthorized: action.flag };
    }
    case UPDATE_USER_AVATAR: {
      return {
        ...state,
        profile: { ...state.profile, photoURL: action.photoURL }
      };
    }
    default:
      return { ...state };
  }
};
export default Auth;

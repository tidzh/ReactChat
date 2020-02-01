import { IS_FETCHING, REGISTER_USER, SET_USER } from "../../constants/actions";

const initialState = {
  user: [],
  test: "",
  isRegistered: false,
  isAuthorized: false,
  isFetching: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const { email, uid } = action.data;
      return { ...state, user: { email, uid }, isRegistered: true };
    case SET_USER:
      return {
        ...state,
        user: action.data
      };
    case IS_FETCHING:
      return { ...state, isFetching: action.fetching };
    default:
      return { ...state };
  }
};
export default User;

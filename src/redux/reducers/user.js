import { IS_FETCHING, SET_USER } from "../../constants/actions";

const initialState = {
  user: [],
  isFetching: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
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

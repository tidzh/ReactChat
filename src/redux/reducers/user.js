import {SET_USER} from "../../constants/actions";

const initialState = {
  user: [],
  test:'',
  isFetching: true
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.data,
        isFetching: action.isFetching
      };
    default:
      return { ...state };
  }
};
export default User;

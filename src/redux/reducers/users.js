import { SET_USERS } from "../../constants/actions";

const initialState = {
  usersList: [],
  isFetching: true
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        usersList: action.data,
        isFetching: action.isFetching
      };
    default:
      return { ...state };
  }
};
export default Users;

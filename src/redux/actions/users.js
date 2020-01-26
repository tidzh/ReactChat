import { usersAPI } from "../../utils/api";
import { SET_USERS } from "../../constants/actions";

export const setUsers = (data, isFetching) => ({
  type: SET_USERS,
  data,
  isFetching
});

export const getUsersRequest = () => async dispatch => {
  const data = await usersAPI.getUsers();
  dispatch(setUsers(data, false));
};

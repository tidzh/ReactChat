import { usersAPI } from "../../utils/api";
import {SET_USER, SET_USERS} from "../../constants/actions";

export const setUsers = (data, isFetching) => ({
  type: SET_USERS,
  data,
  isFetching
});
export const setUser = (data, isFetching) => ({
  type: SET_USER,
  data,
  isFetching
});


export const getUsersRequest = () => async dispatch => {
  const data = await usersAPI.getUsers();
  dispatch(setUsers(data, false));
};
export const getUserRequest = id => async dispatch => {
  const data = await usersAPI.getUser(id);
  dispatch(setUser(data, false));
};

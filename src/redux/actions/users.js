import { usersAPI } from "../../utils/api";
import { SET_USER, SET_USERS } from "../../constants/actions";
import {isFetching} from "./actions-helpers";

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
  dispatch(isFetching(true));
  const data = await usersAPI.getUser(id);
  dispatch(setUser(data));
  dispatch(isFetching(false));
};

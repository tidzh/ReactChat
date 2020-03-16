import { usersAPI } from "../../utils/api";
import {
  FETCHING_DIALOG_IS_USERS,
  FETCHING_IS_USERS,
  SET_ALL_USERS,
  SET_DIALOG_USERS,
  SET_USER
} from "../../constants/actions";
import { isFetching } from "./actions-helpers";

export const setAllUsers = payload => ({
  type: SET_ALL_USERS,
  payload
});
export const setDialogUsers = payload => ({
  type: SET_DIALOG_USERS,
  payload
});
export const isFetchingUsers = fetching => ({
  type: FETCHING_IS_USERS,
  fetching
});
export const isFetchingDialogUsers = fetching => ({
  type: FETCHING_DIALOG_IS_USERS,
  fetching
});
export const setUser = (payload, isFetching) => ({
  type: SET_USER,
  payload,
  isFetching
});

export const getAllUsersRequest = () => async dispatch => {
  const payload = await usersAPI.getAllUsers();
  dispatch(setAllUsers(payload));
  dispatch(isFetchingUsers(true));
};
export const getUsersDialogRequest = (fromUid) => async dispatch => {
  const payload = await usersAPI.getUsersDialog(fromUid);
  dispatch(setDialogUsers(payload));
  dispatch(isFetchingDialogUsers(true));
};
export const getUserRequest = id => async dispatch => {
  dispatch(isFetching(true));
  const payload = await usersAPI.getUser(id);
  dispatch(setUser(payload));
  dispatch(isFetching(false));
};

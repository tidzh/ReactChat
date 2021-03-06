import { authAPI } from "../../utils/api";
import { reset } from "redux-form";
import { stopSubmit } from "redux-form";
import {
  REGISTER_USER,
  SET_SESSION,
  SET_USER_INFO
} from "../../constants/actions";
import { isFetching } from "./actions-helpers";

export const registerUser = payload => ({ type: REGISTER_USER, payload });
export const setSessionUser = flag => ({ type: SET_SESSION, flag });
export const setUserInfo = payload => ({ type: SET_USER_INFO, payload });

export const registerRequest = formData => async dispatch => {
  try {
    dispatch(isFetching(true));
    const payload = await authAPI.registerUser(formData);
    dispatch(registerUser(payload));
    dispatch(reset("signUp"));
    dispatch(isFetching(false));
  } catch (error) {
    dispatch(isFetching(false));
    dispatch(
      stopSubmit("signUp", {
        email: "Ошибка",
        _error: "Пользователь с такие email уже зарегистрирован"
      })
    );
    console.error(error.message);
  }
};
export const signInRequest = formData => async dispatch => {
  try {
    dispatch(isFetching(true));
    await authAPI.signInUser(formData);
    dispatch(reset("signIn"));
    dispatch(isFetching(false));
    dispatch(setSessionUser(true));
  } catch (error) {
    dispatch(isFetching(false));
    dispatch(
      stopSubmit("signIn", {
        email: "Ошибка",
        _error: "Пользователь не найден. Проверьте логин и пароль."
      })
    );
    console.error(error.message);
  }
};
export const checkSessionRequest = () => async dispatch => {
  try {
    const payload = await authAPI.checkSession();
    dispatch(setUserInfo(payload));
    dispatch(setSessionUser(true));
  } catch (error) {
    console.warn(error);
    dispatch(setSessionUser(false));
  }
};
export const signOutUserRequest = authUserId => async dispatch => {
  try {
    await authAPI.signOutUser(authUserId);
    dispatch(setSessionUser(false));
    dispatch(setUserInfo({}));
  } catch (error) {
    console.log(error);
  }
};

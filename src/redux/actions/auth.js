import { authAPI } from "../../utils/api";
import { reset } from "redux-form";
import { stopSubmit } from "redux-form";
import { REGISTER_USER, SET_SESSION } from "../../constants/actions";
import { isFetching } from "./actions-helpers";

export const registerUser = data => ({ type: REGISTER_USER, data });
export const setSessionUser = flag => ({ type: SET_SESSION, flag });

export const registerRequest = formData => async dispatch => {
  try {
    dispatch(isFetching(true));
    const data = await authAPI.registerUser(formData);
    dispatch(registerUser(data));
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
  const data = await authAPI.checkSession();
  Promise.all([data]).then(() => {});
  if (data) {
    dispatch(setSessionUser(true));
  } else {
    dispatch(setSessionUser(false));
  }
};
export const signOutUserRequest = () => async dispatch => {
  try {
    await authAPI.signOutUser();
    dispatch(setSessionUser(false));
  } catch (error) {
    console.log(error);
  }
};

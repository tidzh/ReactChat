import { authAPI } from "../../utils/api";
import { reset } from "redux-form";
import { stopSubmit } from "redux-form";
import { REGISTER_USER } from "../../constants/actions";
import { isFetching } from "./actions-helpers";

export const registerUser = data => ({ type: REGISTER_USER, data });

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
    console.log(error.message);
  }
};
export const signInRequest = formData => async dispatch => {
  try {
    const data = await authAPI.signInUser(formData);
    console.log(data.user);
  } catch (error) {
    dispatch(
      stopSubmit("signIn", {
        email: "Ошибка",
        _error: "Пользователь не найден. Возможно, пользователь был удален."
      })
    );
  }
  dispatch(reset("signIn"));
};

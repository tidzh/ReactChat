import { authAPI } from "../../utils/api";
import { reset } from "redux-form";
import { stopSubmit } from "redux-form";

export const registerRequest = formData => async dispatch => {
  try {
    await authAPI.registerUser(formData);
    dispatch(reset("signUp"));
  } catch (error) {
    dispatch(
      stopSubmit("signUp", {
        email: "Пользователь с такие email уже зарегистрирован",
        _error: error.message
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
  // dispatch(reset("signIn"));
};
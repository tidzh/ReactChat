import { authAPI } from "../../utils/api";
import { reset } from "redux-form";
import { stopSubmit } from "redux-form";

export const registerRequest = formData => async dispatch => {
  try {
    const data = await authAPI.registerUser(formData);
  } catch (error) {
    dispatch(
      stopSubmit("signUp", {
        email: "Пользователь с такие email уже зарегистрирован",
        _error: error.message
      })
    );
    console.log(error.message);
  }

  // dispatch(reset("signUp"));
};
export const signInRequest = formData => async dispatch => {
  authAPI.signInUser(formData);
  dispatch(reset("signIn"));
};

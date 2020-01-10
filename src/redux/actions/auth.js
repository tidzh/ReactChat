import {IS_AUTH_USER, SET_USER_DATA, SET_USER_INPUT} from "../../utils/const";

export const setAuthUserData = () => ({type: SET_USER_DATA}),
    setAuthUserInput = value => ({type: SET_USER_INPUT, value}),
    isAuthUser = (flag, email, name, ava) => ({type: IS_AUTH_USER, flag, email, name, ava});

export const checkToken = () => {
    return (dispatch) => {
        loginAPI.checkToken().then(data => {
            if (data.resultCode === true) {
                dispatch(isAuthUser(true, data.email, data.name, data.ava));
            } else {
                dispatch(isAuthUser(false));
            }
        }).catch(err => {
            console.error(err);
            dispatch(isAuthUser(false));
        });
    }
}
export const authUser = (email, password) => {
    return (dispatch) => {
        loginAPI.checkLogin(email, password)
            .then(response => {
                if (response.status === 200) {
                    dispatch(setAuthUserData())
                }
            }).catch(err => {
            dispatch(stopSubmit('auth', {_error: err.response.data.error}))
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        loginAPI.logout().then(data => {
            dispatch(isAuthUser(false));
        })
    }
}

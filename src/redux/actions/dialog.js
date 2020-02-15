import { DIALOG_GET, DIALOG_ADD_MESSAGE } from "../../constants/actions";
import { dialogAPI } from "../../utils/api";
import { reset } from "redux-form";

export const getDialog = payload => ({ type: DIALOG_GET, payload });
export const setDialog = payload => ({ type: DIALOG_ADD_MESSAGE, payload });

export const setDialogRequest = (formData, userRoomID, fromUid) => async dispatch => {
  const payload = await dialogAPI.addNewMessage(formData, userRoomID, fromUid);
  dispatch(setDialog(payload));
  dispatch(reset("dialog"));
};
export const getDialogRequest = (userRoomID, fromUid) => async dispatch => {
  const payload = await dialogAPI.getDialog(userRoomID, fromUid);
  dispatch(getDialog(payload));
};

import { DIALOG_GET, DIALOG_SET } from "../../constants/actions";
import { dialogAPI } from "../../utils/api";

export const getDialog = payload => ({ type: DIALOG_GET, payload });
export const setDialog = payload => ({ type: DIALOG_SET, payload });

export const setDialogRequest = (formData, userRoomID, fromUid) => () => {
  dialogAPI.setMessage(formData, userRoomID, fromUid);
};
export const getDialogRequest = (userRoomID, fromUid) => async dispatch => {
  const payload = await dialogAPI.getDialog(userRoomID, fromUid);
  dispatch(getDialog(payload));
};

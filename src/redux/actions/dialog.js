import { DIALOG_SET } from "../../constants/actions";
import { dialogAPI } from "../../utils/api";

export const setDialog = payload => ({ type: DIALOG_SET, payload });

export const setDialogRequest = (formData, userRoomID, fromUid) => dispatch => {
  dialogAPI.sendMessage(formData, userRoomID, fromUid);
};

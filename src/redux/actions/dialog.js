import {
  DIALOG_GET,
  DIALOG_ADD_MESSAGE,
  DIALOG_IS_FETCHING
} from "../../constants/actions";
import { dialogAPI } from "../../utils/api";
import { reset } from "redux-form";

export const getDialog = payload => ({ type: DIALOG_GET, payload });
export const setDialog = payload => ({ type: DIALOG_ADD_MESSAGE, payload });
export const dialogIsFetching = fetching => ({
  type: DIALOG_IS_FETCHING,
  fetching
});

export const addNewRequest = (
  formData,
  userRoomID,
  fromUid
) => async dispatch => {
  const payload = await dialogAPI.addNewMessage(formData, userRoomID, fromUid);
  dispatch(setDialog(payload));
  dispatch(reset("dialog"));
};
export const getDialogRequest = (userRoomID, fromUid) => async dispatch => {
  dispatch(dialogIsFetching(true));
  const payload = await dialogAPI.getDialog(userRoomID, fromUid);
  dispatch(getDialog(payload));
  dispatch(dialogIsFetching(false));
};

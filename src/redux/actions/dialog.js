import {
  HISTORY_SET,
  DIALOG_ADD_MESSAGE,
  HISTORY_IS_FETCHING
} from "../../constants/actions";
import { dialogAPI } from "../../utils/api";
import { reset } from "redux-form";

export const setHistory = payload => ({ type: HISTORY_SET, payload });
export const setDialog = payload => ({ type: DIALOG_ADD_MESSAGE, payload });
export const dialogIsFetching = fetching => ({
  type: HISTORY_IS_FETCHING,
  fetching
});

export const addNewMessageRequest = (
  formData,
  userRoomID,
  fromUid
) => async dispatch => {
  const payload = await dialogAPI.addNewMessage(formData, userRoomID, fromUid);
  dispatch(setDialog(payload));
  dispatch(reset("dialog"));
};

export const getDialogHistoryRequest = (
  userRoomID,
  fromUid = ""
) => async dispatch => {
  const payload = await dialogAPI.getHistory(userRoomID, fromUid);
  dispatch(setHistory(payload));
  dispatch(dialogIsFetching(true));
};

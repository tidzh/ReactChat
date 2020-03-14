import {
  HISTORY_SET,
  DIALOG_ADD_MESSAGE,
  HISTORY_IS_FETCHING,
  UPDATE_LAST_MESSAGE_USER_DIALOG
} from "../../constants/actions";
import { dialogAPI } from "../../utils/api";
import { reset } from "redux-form";
import { getGroupChatId } from "../../utils/functions-helpers";

export const setHistory = payload => ({ type: HISTORY_SET, payload });
export const setDialog = payload => ({ type: DIALOG_ADD_MESSAGE, payload });
export const dialogIsFetching = fetching => ({
  type: HISTORY_IS_FETCHING,
  fetching
});
export const updateLastMessageUserDialog = (payload, groupChatId) => ({
  type: UPDATE_LAST_MESSAGE_USER_DIALOG,
  payload,
  groupChatId
});

export const addNewMessageRequest = (
  formData,
  userRoomID,
  fromUid
) => async dispatch => {
  const payload = await dialogAPI.addNewMessage(formData, userRoomID, fromUid);
  const groupChatId = getGroupChatId(userRoomID, fromUid);
  dispatch(updateLastMessageUserDialog(payload, groupChatId));
  dispatch(setDialog(payload, groupChatId));
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

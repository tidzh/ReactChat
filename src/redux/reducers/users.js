import {
  FETCHING_IS_USERS,
  FETCHING_DIALOG_IS_USERS,
  SET_ALL_USERS,
  SET_DIALOG_USERS,
  UPDATE_LAST_MESSAGE_USER_DIALOG
} from "../../constants/actions";
import { getGroupChatId } from "../../utils/functions-helpers";

const initialState = {
  usersList: [],
  lastMessage: [],
  isFetching: false,
  isFetchingDialogUser: false
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        usersList: action.payload
      };
    case SET_DIALOG_USERS:
      return {
        ...state,
        lastMessage: action.payload
      };
    case UPDATE_LAST_MESSAGE_USER_DIALOG:
      const groupChatId = getGroupChatId(action.userRoomID, action.fromUid);
      const check = state.lastMessage.some(item => item.id === groupChatId);
      return {
        ...state,
        lastMessage: !check
          ? [
              ...state.lastMessage,
              {
                ...action.payload,
                uid: action.userRoomID,
                id: groupChatId,
                whoId: true
              }
            ]
          : state.lastMessage.map(item => {
              return item.id === groupChatId
                ? { ...item, content: action.payload.content, whoId: true }
                : item;
            })
      };
    case FETCHING_IS_USERS:
      return { ...state, isFetching: action.fetching };
    case FETCHING_DIALOG_IS_USERS:
      return { ...state, isFetchingDialogUser: action.fetching };
    default:
      return { ...state };
  }
};
export default Users;

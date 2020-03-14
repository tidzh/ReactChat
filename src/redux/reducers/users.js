import {
  FETCHING_IS_USERS,
  FETCHING_DIALOG_IS_USERS,
  SET_ALL_USERS,
  SET_DIALOG_USERS,
  UPDATE_LAST_MESSAGE_USER_DIALOG
} from "../../constants/actions";

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
      return {
        ...state,
        lastMessage: state.lastMessage.map(item =>
          item.id === action.groupChatId
            ? { ...item, content: action.payload.content }
            : item
        )
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

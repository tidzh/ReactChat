import {
  HISTORY_SET,
  DIALOG_ADD_MESSAGE,
  HISTORY_IS_FETCHING,
} from "../../constants/actions";

const initialState = {
  posts: [],
  dialogIsFetching: false,
};
const DialogHistory = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY_IS_FETCHING:
      return { ...state, dialogIsFetching: action.fetching };
    case HISTORY_SET:
      return { ...state, posts: action.payload };
    case DIALOG_ADD_MESSAGE:
      return { ...state, posts: [...state.posts, { ...action.payload }] };
    default:
      return state;
  }
};
export default DialogHistory;

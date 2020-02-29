import {
  DIALOG_GET,
  DIALOG_ADD_MESSAGE,
  DIALOG_IS_FETCHING,
} from "../../constants/actions";

const initialState = {
  posts: [],
  dialogIsFetching: false,
};
const DialogHistory = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_IS_FETCHING:
      return { ...state, dialogIsFetching: action.fetching };
    case DIALOG_GET:
      return { ...state, posts: action.payload };
    case DIALOG_ADD_MESSAGE:
      return { ...state, posts: [...state.posts, { ...action.payload }] };
    default:
      return state;
  }
};
export default DialogHistory;

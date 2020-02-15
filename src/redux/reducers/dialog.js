import { DIALOG_GET, DIALOG_ADD_MESSAGE } from "../../constants/actions";

const initialState = {
  posts: null
};
const Dialog = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_GET:
      return { ...state, posts: action.payload };
    case DIALOG_ADD_MESSAGE:
      return { ...state, posts: [...state.posts, { ...action.payload }] };
    default:
      return state;
  }
};
export default Dialog;

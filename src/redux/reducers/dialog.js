import {DIALOG_GET, DIALOG_SET} from "../../constants/actions";

const initialState = {
  posts: []
};
const Dialog = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_GET:
      return { ...state, posts: action.payload };
    case DIALOG_SET:
      return { ...state };
    default:
      return state;
  }
};
export default Dialog;

import { REGISTER_USER } from "../../constants/actions";

const initialState = {
  user: [],
  isRegistered: false,
  isAuthorized: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const { email, uid } = action.data;
      
      return { ...state, user: { email, uid }, isRegistered: true };
    default:
      return state;
  }
};

export default Auth;

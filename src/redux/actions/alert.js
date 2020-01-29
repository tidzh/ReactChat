import { CLEAR, ERROR, SUCCESS } from "../../constants/actions";

export const success = message => ({ type: SUCCESS, message });
export const error = message => ({ type: ERROR, message });
export const clear = () => ({ type: CLEAR });

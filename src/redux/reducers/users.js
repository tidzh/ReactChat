import {SET_USERS} from "../../constants/actions";

const initialState = {
    users: []
};

const Users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state}
        default:
            return {...state}
    }
};
export default Users
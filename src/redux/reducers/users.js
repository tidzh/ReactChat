import {SET_USERS} from "../../constants/actions";

const initialState = {
  usersList: [
	{
	  id: 1,
	  ava: 'https://firebasestorage.googleapis.com/v0/b/reactchat-6e497.appspot.com/o/assets%2Fimg%2Favatar%2Fava-2.jpg?alt=media&token=8c5dd122-0110-418b-9347-8cc7b914dd0b',
	  name: 'Гай Юлий Цезарь',
	  online: true,
	  messages: [{
		id: 0,
		text: 'Кек. Ты то меня никогда не предашь 😌'
	  }
	  ]
	},
	{
	  id: 2,
	  ava: 'https://firebasestorage.googleapis.com/v0/b/reactchat-6e497.appspot.com/o/assets%2Fimg%2Favatar%2Fava-2.jpg?alt=media&token=8c5dd122-0110-418b-9347-8cc7b914dd0b',
	  name: 'Гай Юлий Цезарь',
	  online: true,
	  messages: [{
		id: 0,
		text: 'Кек. Ты то меня никогда не предашь 😌'
	  }
	  ]
	}
  ]
};

const Users = (state = initialState, action) => {
  switch (action.type) {
	case SET_USERS:
	  return {...state};
	default:
	  return {...state};
  }
};
export default Users;

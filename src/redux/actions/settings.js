import { UPDATE_USER_AVATAR } from "../../constants/actions";
import { updateUserAPI } from "../../utils/api";
import {getFilePathRequest, uploadFileRequest} from "../../utils/functions-helpers";

export const uploadAvatar = photoURL => ({ type: UPDATE_USER_AVATAR, photoURL });

export const uploadAvatarRequest = (file, userID) => async dispatch => {
  const photoURL = await getFilePathRequest(await uploadFileRequest(file));
  await updateUserAPI.updateAvatar(photoURL, userID);
  dispatch(uploadAvatar(photoURL));
};

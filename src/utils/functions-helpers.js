import firebase from "../components/Firebase/Firebase";
import { uploadFileAPI } from "./api";
import { PATH } from "../constants/settings";

export const hashString = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};
export const getTimestamp = () => {
  return firebase.firestore.Timestamp.fromDate(new Date());
};

export const convertDate = (value, shortData = false) => {
  const time = new Date(value * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = new Date(value * 1000).toLocaleDateString([], {
    month: "long",
    day: "numeric"
  });
  if (!shortData) {
    return `${date} в ${time}`;
  } else {
    const isTodayCheck = isToday(new Date(value * 1000));
    return !isTodayCheck ? date : time;
  }
};
const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

export const getGroupChatId = (fromUid, userRoomID = "") => {
  if (hashString(fromUid) <= hashString(userRoomID)) {
    return `${fromUid}-${userRoomID}`;
  } else {
    return `${userRoomID}-${fromUid}`;
  }
};
export const splitUserId = id => id.split("-");

export const uploadFileRequest = (file, newFileName) => {
  return uploadFileAPI.uploadFile(file, PATH.getAvatar(), newFileName);
};

export const getFilePathRequest = fileName => {
  return uploadFileAPI.getFile(fileName, PATH.getAvatar());
};

import { createSelector } from "reselect";
import { getProfileData } from "./auth";

export const getUsers = state => state.users.usersList;
export const getIsFetching = state => state.users.isFetching;
export const getLastMessagesUsers = state => state.users.lastMessage;
export const getIsFetchingDialogUser = state =>
  state.users.isFetchingDialogUser;

// Отфильтровываем свой профиль от профилей других юзеров

export const getCurrentUsers = createSelector(
  getUsers,
  getProfileData,
  (items, profile) => {
    return items.filter(item => item.uid !== profile.id);
  }
);
export const getUsersListDialogs = createSelector(
  getUsers,
  getLastMessagesUsers,
  (users, messages) => {
    return messages.map(message => {
      const person = users.find(({ uid }) => message.uid === uid);
      return { ...person, ...message};
    });
  }
);

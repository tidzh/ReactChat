import { createSelector } from "reselect";
import { getProfileData } from "./auth";

export const getUsers = state => state.users.usersList;
export const getIsFetching = state => state.users.isFetching;

// Отфильтровываем свой профиль от профилей других юзеров

export const getCurrentUsers = createSelector(
  getUsers,
  getProfileData,
  (items, profile) => {
    return items.filter(item => item.id !== profile.id);
  }
);

export const getUser = state => state.user.user;
export const getIsFetching = state => state.user.isFetching;

export const getEmail = state => state.user.user.email;
export const getIsAuthorized = state => state.user.isAuthorized;
export const getIsRegistered = state => state.user.isRegistered;

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsRegistered = state => state.auth.isRegistered;
export const getProfileData = state => state.auth.authorizedUser;
export const getAuthUserId = state => state.auth.authorizedUser.id;
export const getEmail = state => state.auth.authorizedUser.email;
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsRegistered = state => state.auth.isRegistered;
export const getProfileData = state => state.auth.profile;
export const getAuthUserId = state => state.auth.profile.id;
export const getEmail = state => state.auth.profile.email;
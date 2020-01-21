import * as axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true
});

export const loginAPI = {
  checkToken() {
    return instance.get(`/checkToken`).then(response => response.data);
  },
  checkLogin(email, password) {
    return instance
      .post(`/auth`, { email, password })
      .then(response => response);
  },
  logout() {
    return instance.get(`/logout`).then(response => response.data);
  }
};

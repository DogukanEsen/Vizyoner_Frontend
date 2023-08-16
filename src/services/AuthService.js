import axios from "axios";
import { AuthService } from "../config/api";

const headers = {
  "Content-Type": "application/json",
};

export const registerUser = (body) => {
  return axios.post(AuthService.registerUser, body, { headers });
};
export const registerFirm = (body) => {
  return axios.post(AuthService.registerFirm, body, { headers });
};
export const loginUser = (body) => {
  return axios.post(AuthService.loginUser, body, { headers });
};
export const loginFirm = (body) => {
  return axios.post(AuthService.loginFirm, body, { headers });
};

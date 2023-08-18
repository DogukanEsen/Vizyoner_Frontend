import axios from "axios";
import { UserService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getResumeById = (body) => {
  return axios.get(UserService.firmaEkle, body, {
    headers,
  });
};
export const getUserDetails = (id) => {
  return axios.get(UserService.getUserDetails.replace("{id}", id), { headers });
};
export const putUpdateUserDetails = (id, body) => {
  return axios.put(UserService.putUpdateUserDetails.replace("{id}", id), body, {
    headers,
  });
};

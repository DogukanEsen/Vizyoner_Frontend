import axios from "axios";
import { UserService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getUserDetails = (jwt) => {
  return axios.get(UserService.getUserDetails.replace("{jwt}", jwt), {
    headers,
  });
};
export const putUpdateUserDetails = (jwt, body) => {
  return axios.put(
    UserService.putUpdateUserDetails.replace("{jwt}", jwt),
    body,
    {
      headers,
    }
  );
};

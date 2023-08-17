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

import axios from "axios";
import { ResumeService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getResumeById = (jwt) => {
  return axios.get(ResumeService.getResumeById.replace("{jwt}", jwt), {
    headers,
  });
};
export const putUpdateResumeById = (jwt, body) => {
  return axios.put(ResumeService.updateResumeById.replace("{jwt}", jwt), body, {
    headers,
  });
};

import axios from "axios";
import { ResumeService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getResumeById = (id) => {
  return axios.get(ResumeService.getResumeById.replace("{id}", id), {
    headers,
  });
};
export const putUpdateResumeById = (id, body) => {
  return axios.put(ResumeService.updateResumeById.replace("{id}", id), body, {
    headers,
  });
};
export const createResume = (id, body) => {
  return axios.post(ResumeService.createResume.replace("{id}", id), body, {
    headers,
  });
};

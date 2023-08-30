import axios from "axios";
import { ApplicationService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getApplications = (jwt) => {
  return axios.get(ApplicationService.getApplications.replace("{jwt}", jwt), {
    headers,
  });
};

export const postCreateApplication = (jwt, advertid, body) => {
  return axios.post(
    ApplicationService.postCreateApplication
      .replace("{jwt}", jwt)
      .replace("{advertId}", advertid),
    body,
    { headers }
  );
};

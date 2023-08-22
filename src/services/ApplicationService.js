import axios from "axios";
import { ApplicationService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getApplications = (userId) => {
  return axios.get(
    ApplicationService.getApplications.replace("{userId}", userId),
    {
      headers,
    }
  );
};

export const postCreateApplication = (userid, advertid, body) => {
  return axios.post(
    ApplicationService.postCreateApplication
      .replace("{userId}", userid)
      .replace("{advertId}", advertid),
    body,
    { headers }
  );
};

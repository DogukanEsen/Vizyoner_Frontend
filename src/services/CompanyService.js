import axios from "axios";
import { CompanyService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getCompanyById = (jwt) => {
  return axios.get(CompanyService.getCompanyById.replace("{jwt}", jwt), {
    headers,
  });
};
export const putUpdateCompanyById = (jwt, body) => {
  return axios.put(
    CompanyService.updateCompanyById.replace("{jwt}", jwt),
    body,
    {
      headers,
    }
  );
};
export const postCreateAdvert = (jwt, body) => {
  return axios.post(
    CompanyService.postCreateAdvert.replace("{jwt}", jwt),
    body,
    { headers }
  );
};

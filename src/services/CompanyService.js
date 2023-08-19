import axios from "axios";
import { CompanyService } from "../config/api";

const headers = {
  Authorization: localStorage.getItem("tokenKey"),
  "Content-Type": "application/json",
};

export const getCompanyById = (id) => {
  return axios.get(CompanyService.getCompanyById.replace("{userid}", id), {
    headers,
  });
};
export const putUpdateCompanyById = (id, body) => {
  return axios.put(
    CompanyService.updateCompanyById.replace("{userid}", id),
    body,
    {
      headers,
    }
  );
};

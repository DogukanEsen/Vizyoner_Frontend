import axios from "axios";
import { AuthService } from "../config/api";
import { useState } from "react";

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
export const AisUser = () => {
  const [resume, setResume] = useState([]);
  const jwt = localStorage.getItem("tokenKey");
  axios
    .get(AuthService.isUser.replace("{jwt}", jwt), { headers })
    .then((res) => {
      console.log("Data: " + res.data);
      setResume(res.data);
    })
    .catch((err) => {
      console.log("Error: " + err);
      setResume(false);
    });
  return resume.values;
};
export const isAdmin = (jwt) => {
  if (jwt === "null" || !jwt) return false;
  axios
    .get(AuthService.isAdmin.replace("{jwt}", jwt), {
      headers,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};
export const isAuth = (jwt) => {
  if (jwt === "null" || !jwt) return false;
  return axios
    .get(AuthService.isAuth.replace("{jwt}", jwt), {
      headers,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};

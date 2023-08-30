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
  const jwt = localStorage.getItem("tokenKey");
  return axios.get(AuthService.isUser.replace("{jwt}", jwt), { headers });
};
export const isAdmin = (jwt) => {
  return axios.get(AuthService.isAdmin.replace("{jwt}", jwt), {
    headers,
  });
};
export const isAuth = (jwt) => {
  return axios.get(AuthService.isAuth.replace("{jwt}", jwt), {
    headers,
  });
};

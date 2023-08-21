import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { isAdmin, isAuth, isUser } from "../services/AuthService";

const IsUser = () => {
  return isUser(localStorage.getItem("tokenKey"));
};
const IsAdmin = () => {
  return isAdmin(localStorage.getItem("tokenKey"));
};
const IsAuth = () => {
  isAuth(localStorage.getItem("tokenKey")).then((res) => {
    return res.data;
  });
};
export const UserRoute = () => {
  const deneme = isUser();
  debugger;
  return IsUser() ? <Outlet /> : <Navigate to="/" />;
};
export const AdminRoute = () => {
  const deneme = IsAdmin();
  debugger;
  return IsAdmin() ? <Outlet /> : <Navigate to="/" />;
};
export const AuthRoute = () => {
  return IsAuth() ? <Outlet /> : <Navigate to="/" />;
};

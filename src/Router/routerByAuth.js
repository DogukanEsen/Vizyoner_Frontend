import React, { useState } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AisUser, isAdmin, isAuth, isUser } from "../services/AuthService";

const IsUser = () => {
  return AisUser();
};
const IsAdmin = () => {
  isAdmin(localStorage.getItem("tokenKey")).then((res) => {
    debugger;
    return res.data;
  });
};
const IsAuth = () => {
  isAuth(localStorage.getItem("tokenKey")).then((res) => {
    debugger;
    return res.data;
  });
};
export const UserRoute = () => {
  console.log(IsUser());
  return IsUser() ? <Outlet /> : <Navigate to="/" />;
};
export const AdminRoute = () => {
  return IsAdmin() ? <Outlet /> : <Navigate to="/kurumsal" />;
};
export const AuthRoute = () => {
  return IsAuth() ? <Outlet /> : <Navigate to="/" />;
};

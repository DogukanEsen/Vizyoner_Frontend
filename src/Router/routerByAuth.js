import React, { useState } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AisUser, isAdmin, isAuth, isUser } from "../services/AuthService";

const IsAdmin = () => {
  isAdmin(localStorage.getItem("tokenKey")).then((res) => {
    debugger;
    return res.data;
  });
};
const IsAuth = (a) => {
  isAuth(localStorage.getItem("tokenKey")).then((res) => {
    debugger;
    return res.data;
  });
};
export const UserRoute = async () => {
  const result = await AisUser();
  return result.data ? <Outlet /> : <Navigate to="/" />;
};
export const AdminRoute = () => {
  return IsAdmin() ? <Outlet /> : <Navigate to="/kurumsal" />;
};
export const AuthRoute = () => {
  return IsAuth() ? <Outlet /> : <Navigate to="/" />;
};

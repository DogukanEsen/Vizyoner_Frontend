import React from "react";
import { useState } from "react";
import Validation from "./Validation";
import axios from "axios";
import { registerFirm } from "../../services/AuthService";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../../toasts/Toast";

export default function Index() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //AUTH
  const sendRequest = () => {
    console.log(values.values);
    registerFirm({
      firstname: values.name,
      lastname: values.surname,
      email: values.email,
      password: values.confirmPassword,
    })
      .then((response) => toastSuccess("Kayıt Başarılı"))
      .catch((err) => {
        toastError(err);
        console.log(err);
      });
  };
  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.password == values.confirmPassword) sendRequest("register/user");
  };
  //AUTH

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));
  }
  return (
    <div>
      <div className="bg-zinc-100  p-2 ">
        <div className="flex gap-60 items-center h-22 max-w-[1240px] px-2  ">
          <a href="#">
            <img
              className="max-w-[250px] "
              src="https://kurumsal.vizyonergenc.com/img/brand/logo.png"
              alt="logo"
            />
          </a>
          <a href="#">
            <img
              className="h-20"
              src="https://kurumsal.vizyonergenc.com/img/brand/ssblogo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto">
          <form
            className="max-w-[500px] w-full mx-auto bg-zinc-100 p-5 px-10 rounded-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl dark:text-white font-bold text-center text-green-600">
              Vizyoner Genç'e Kayıt Ol!
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-gray-400 py-3">
              <div className="flex flex-col w-full sm:pr-2">
                <label className="font-bold">Ad</label>
                <input
                  className="rounded-lg text-gray-400 mt-2 p-2 "
                  type="text"
                  value={values.name}
                  name="name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {errors.name && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {errors.name}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-gray-400 py-3">
              <div className="flex flex-col w-full sm:pr-2">
                <label className="font-bold">Soyad</label>
                <input
                  className="rounded-lg text-gray-400 mt-2 p-2 "
                  type="text"
                  value={values.surname}
                  name="surname"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {errors.name && (
                  <p style={{ color: "red", fontSize: "18px" }}>
                    {errors.name}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col text-gray-400 py-3  ">
              <label className="font-bold ">E-posta Adresi</label>
              <input
                className="rounded-lg text-gray-400 mt-2 p-2"
                type="email"
                value={values.email}
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "18px" }}>{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col text-gray-400 py-3">
              <label className="font-bold">Şifre</label>
              <input
                className="rounded-lg text-gray-400 mt-2 p-2"
                type="password"
                value={values.password}
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "18px" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex flex-col text-gray-400 py-3">
              <label className="font-bold">Şifre Tekrar</label>
              <input
                className="rounded-lg text-gray-400 mt-2 p-2"
                type="password"
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red", fontSize: "18px" }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="flex justify-center text-gray-400 py-2">
              <button
                className="w-full my-5 py-2 bg-green-500 shadow-lg hover:shadow-teal-600/60 font-semibold rounded-lg text-black"
                type="submit"
                onClick={() => handleRegister()}
              >
                Kayıt olun
              </button>
            </div>
          </form>
          <img
            src="https://kurumsal.vizyonergenc.com/img/brand/login_bg.svg"
            alt="kurumsal"
          />
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import { useState } from "react";

const baseUrl = "http://localhost:8080";

var final;

const fetchDataWauth = async (url) => {
  const response = await axios
    .get(`${baseUrl}${url}`, {
      headers: {
        Authorization: localStorage.getItem("tokenKey"), // Değiştirmeniz gereken oturum açma anahtarı (token) veya kimlik doğrulama bilgileri
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json)
    .then((result) => (final = result))
    .catch((error) => console.log({ error }));
  console.log("Final: " + final);
  return final;
};
const fetchData = async (url) => {
  try {
    const response = await axios.get(`${baseUrl}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const postData = async (url, data) => {
  try {
    const response = await axios.post(`${baseUrl}${url}`, data, {
      headers: {
        Authorization: localStorage.getItem("tokenKey"), // Değiştirmeniz gereken oturum açma anahtarı (token) veya kimlik doğrulama bilgileri
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const putData = async (url, data) => {
  try {
    const response = await axios.put(`${baseUrl}${url}`, data, {
      headers: {
        Authorization: localStorage.getItem("tokenKey"), // Değiştirmeniz gereken oturum açma anahtarı (token) veya kimlik doğrulama bilgileri
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteData = async (url) => {
  try {
    const response = await axios.delete(`${baseUrl}${url}`, {
      headers: {
        Authorization: localStorage.getItem("tokenKey"), // Değiştirmeniz gereken oturum açma anahtarı (token) veya kimlik doğrulama bilgileri
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchData, fetchDataWauth, postData, putData, deleteData };

import axios from "axios";
import { AdvertService } from "../config/api";

const headers = {
  "Content-Type": "application/json",
};

export const getAllAdverts = () => {
  return axios.get(AdvertService.getAllAdverts, { headers });
};
export const getAdvertByID = (id) => {
  return axios.get(AdvertService.getAdvertById.replace("{id}", id), {
    headers,
  });
};
export const getAiAdverts = (jwt) => {
  return axios.get(AdvertService.getAiAdverts.replace("{jwt},jwt"), {
    headers,
  });
};

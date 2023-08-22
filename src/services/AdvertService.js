import axios from "axios";
import { AdvertService } from "../config/api";

const headers = {
  "Content-Type": "application/json",
};

export const getAllAdverts = () => {
  return axios.get(AdvertService.getAllAdverts, { headers });
};

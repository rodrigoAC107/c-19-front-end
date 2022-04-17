import axios from "axios";
import api from "../api/axios";

const API_BASE_URL = import.meta.env.VITE_URL_BASE;

export const meUser = () => {
  return api.get(API_BASE_URL + "/users/me");
};

export const login = (email, password) => {
  const data = {
    email,
    password,
  };

  return api.post(API_BASE_URL + "/auth/login", data);
};

export const putUser = (data) => {
  return api.put(API_BASE_URL + "/users/" + data.uid, data);
};

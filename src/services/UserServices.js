import axiosInstance from "../api/axios";

const API_BASE_URL = import.meta.env.VITE_URL_BASE;

export const login = (email, password) => {
  const data = {
    email,
    password,
  };

  return axiosInstance.post(API_BASE_URL + "/auth/login", data);
};

export const meUser = () => {
  return axiosInstance.get(API_BASE_URL + "/users/me");
};

export const putUser = (data) => {
  return axiosInstance.put(API_BASE_URL + "/users/" + data.uid, data);
};

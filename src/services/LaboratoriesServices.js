import axiosInstance from "../api/axios";

const API_BASE_URL = import.meta.env.VITE_URL_BASE;

export const getLaboratories = (show = 10, search = null, page = 1) => {
  let url = API_BASE_URL + `/laboratories?limit=${show}&from=${page}`;

  if (search) {
    url += `&search=${search}`
  }

  return axiosInstance.get(url);
};


export const getLaboratory = ({ laboratoryId = null }) => {
  let url = API_BASE_URL + `/laboratories/${laboratoryId}`;

  return axiosInstance.get(url);
};
import axios from 'axios';

const BASE_URL = import.meta.VITE_URL_BASE;

const axiosInstance = axios.create({
  baseUrl: BASE_URL,
}); 

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('x-token'));
    const auth = token ? token.replace(/['"]+/g, '') : null
    config.headers.common['x-token'] = auth;
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;

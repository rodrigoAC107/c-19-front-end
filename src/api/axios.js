import axios from 'axios';

const BASE_URL = import.meta.VITE_URL_BASE;
const token = localStorage.getItem('x-token');

const api = axios.create({
  baseUrl: BASE_URL,
  headers: token ? {'x-token': token.replace(/['"]+/g, '')} : null
}); 


export default api;
import axios from 'axios';

const BASE_URL = import.meta.VITE_URL_BASE;
const token = localStorage.getItem('x-token');

const api = axios.create({
  baseUrl: BASE_URL,
  headers: {'x-token': token.replace(/['"]+/g, '')}
}); 


export default api;
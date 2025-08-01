import axios from "axios";
const BASE_URL = import.meta.env.VITE_WP_DOMAIN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

export { isAxiosError } from 'axios';

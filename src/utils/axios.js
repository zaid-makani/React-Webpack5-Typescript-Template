import axios from "axios";

import { apiUrl, getToken } from "./helper";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const tmpConfig = config;
    tmpConfig.headers.Authorization = `Bearer ${getToken()}`;
    tmpConfig.headers["Content-Type"] = "application/json";
    return tmpConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;

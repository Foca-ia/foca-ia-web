import axios from "axios";
import { getUserLocalStorage } from "@/Context/AuthProvider/utils";
import Cookies from "js-cookie";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

API.defaults.withCredentials = true;
API.defaults.xsrfCookieName = "csrftoken"; // O nome do cookie que contém o token CSRF
API.defaults.xsrfHeaderName = "X-CSRFToken"; // O nome do cabeçalho onde o token CSRF deve ser enviado

const getCsrfToken = () => Cookies.get("csrftoken");

API.interceptors.request.use(
  (config) => {
    // Add CSRF token to the headers
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }

    // Optionally, you can add other headers like Authorization
    // const user = getUserLocalStorage();
    // if (user && user.token) {
    //   config.headers['Authorization'] = `Bearer ${user.token}`;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;

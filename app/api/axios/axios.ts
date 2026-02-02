// import axios from "axios";
// import {Cookies} from 'react-cookie';

// export const BaseURL = 'http://localhost:8000'
// const AxiosInstance =  axios.create({
//     baseURL: BaseURL,
// });
// let cookies=new Cookies();
// AxiosInstance.interceptors.request.use(
//     function (config) {
//         const token = cookies.get('token');
//         if (token) {
//             config.headers=config.headers || {};
//             config.headers["x-access-token"] = token;
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// export default  AxiosInstance;

// import axios from "axios";
// import { Cookies } from "react-cookie";

// export const BaseURL = "http://localhost:8000";

// const AxiosInstance = axios.create({
//   baseURL: BaseURL,
//   withCredentials: true, // optional but good
// });

// const cookies = new Cookies();

// AxiosInstance.interceptors.request.use(
//   (config) => {
//     const token = cookies.get("token");

//     if (token) {
//       config.headers = config.headers || {};
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default AxiosInstance;


import axios from "axios";
import { Cookies } from "react-cookie";

export const BaseURL = "http://localhost:8000";

const AxiosInstance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});

const cookies = new Cookies();

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = cookies.get("token");

    // ❗ Do NOT attach token for public APIs
    const publicUrls = [
      "/users-api/register/",
      "/users-api/login/",
      "/users-api/register/verify-otp/",
    ];

    const isPublic = publicUrls.some((url) =>
      config.url?.includes(url)
    );

    if (token && !isPublic) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;

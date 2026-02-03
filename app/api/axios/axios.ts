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


// import axios from "axios";
// import { Cookies } from "react-cookie";

// export const BaseURL = "http://127.0.0.1:8000";

// const AxiosInstance = axios.create({
//   baseURL: BaseURL,
//   withCredentials: true,
// });

// const cookies = new Cookies();

// AxiosInstance.interceptors.request.use(
//   (config) => {
//     const token = cookies.get("token");

//     // ❗ Do NOT attach token for public APIs
//     const publicUrls = [
//       "/users-api/register/",
//       "/users-api/login/",
//       "/users-api/register/verify-otp/",
//     ];

//     const isPublic = publicUrls.some((url) =>
//       config.url?.includes(url)
//     );

//     if (token && !isPublic) {
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

export const BaseURL = "http://127.0.0.1:8000";

const AxiosInstance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
});

const cookies = new Cookies();

// ================= REQUEST INTERCEPTOR =================
AxiosInstance.interceptors.request.use(
  (config) => {
    // 1. Get token from cookies
    const token = cookies.get("token");

    // 2. Define routes that should NOT send a token
    const isPublicUrl = 
      config.url?.includes("/login/") || 
      config.url?.includes("/register/") || 
      config.url?.includes("/verify-otp/");

    // 3. Attach token if available
    if (token && !isPublicUrl) {
      // Use this method to ensure you don't overwrite other important headers
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 4. Debug: Important for your troubleshooting
    console.log(`[Axios Request] ${config.method?.toUpperCase()} ${config.url} | Token Attached: ${!!token}`);

    return config;
  },
  (error) => Promise.reject(error)
);

// ================= RESPONSE INTERCEPTOR =================
// This handles API errors and extracts meaningful error messages
AxiosInstance.interceptors.response.use(
  (response) => {
    // ✅ Check for non-2xx status codes and reject appropriately
    if (response.status && response.status >= 400) {
      return Promise.reject({
        response,
        message: getErrorMessage(response)
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const message = getErrorMessage(error.response);

      if (status === 401) {
        console.error("❌ Unauthorized! Token expired or invalid.");
        // Optional: Clear cookie and redirect to login
        // cookies.remove("token", { path: "/" });
        // window.location.href = "/pages/auth/login";
      } else if (status === 404) {
        console.error("❌ Resource not found (404):", error.response.config?.url);
      } else if (status >= 500) {
        console.error("❌ Server error (" + status + "):", message);
      } else {
        console.error("❌ API Error (" + status + "):", message);
      }

      // Return error with clean message
      return Promise.reject({
        status,
        message,
        data: error.response.data,
        url: error.response.config?.url
      });
    } else if (error.request) {
      // Request made but no response received
      console.error("❌ Network Error: No response from server");
      return Promise.reject({
        message: "Network error - please check your connection",
        request: error.request
      });
    } else {
      // Error in request setup
      console.error("❌ Error:", error.message);
      return Promise.reject({
        message: error.message || "Unknown error occurred"
      });
    }
  }
);

/**
 * Extract meaningful error message from response
 */
function getErrorMessage(response: any): string {
  try {
    const data = response.data;
    
    // Check for common error response formats
    if (typeof data === "string") {
      // HTML error page or plain text
      if (data.includes("<")) {
        // It's HTML, extract just status message
        return `HTTP ${response.status}: ${response.statusText}`;
      }
      return data;
    }
    
    if (typeof data === "object") {
      // JSON error response
      return (
        data.message ||
        data.detail ||
        data.error ||
        data.msg ||
        `HTTP ${response.status}: ${response.statusText}`
      );
    }

    // Fallback
    return `HTTP ${response.status}: ${response.statusText}`;
  } catch {
    return `HTTP ${response.status}: ${response.statusText}`;
  }
}

export default AxiosInstance;
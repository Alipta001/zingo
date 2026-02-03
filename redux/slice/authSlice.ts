
// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import AxiosInstance from "@/app/api/axios/axios";
// // import { toast } from "sonner";
// // import endPoints from "@/app/api/endPoints/endPoints";


// // // Initial state
// // const initialState = {
// //   isOtpverified: false,
// //   email: "",
// //   userId: null,
// //   loading: false,
// // };

// // // ==================== Async Thunk ====================
// // export const authRegistration = createAsyncThunk(
// //   "auth/authRegistration",
// //   async (payload, { rejectWithValue }) => {
// //     try {
// //       // Axios POST request with JSON payload
// //       const response = await AxiosInstance.post(endPoints.auth.signup, payload, {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       console.log("Backend response data:", response.data.message);
// //       return response.data;
// //     }catch (error) {
  
// //   toast.error(error.response?.data?.message || "Registration failed");
// //   return rejectWithValue(error.response?.data || { message: "Registration failed" });
// // }

// //     // } catch (error) {
// //     //   // Reject with backend error or fallback toast
// //     //   toast.error(error.response?.data?.message || "Registration failed");
// //     //   return rejectWithValue(error.response?.data || { message: "Registration failed" });
// //     // }
// //   }
// // );
// // export const authOtp = createAsyncThunk(
// //   "auth/authOtp",
// //   async (payload: { userId: string; otp: string }, { rejectWithValue }) => {
// //     try {
// //       const response = await AxiosInstance.post(
// //         endPoints.auth.otp,
// //         payload,
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       return response.data;
// //     } catch (error: any) {
// //       toast.error(error.response?.data?.message || "OTP verification failed");
// //       return rejectWithValue(
// //         error.response?.data || { message: "OTP verification failed" }
// //       );
// //     }
// //   }
// // );

// // // ==================== Slice ====================
// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       // Registration pending
// //       .addCase(authRegistration.pending, (state) => {
// //         state.loading = true;
// //       })


// //     .addCase(authRegistration.fulfilled, (state, { payload }) => {
// //   state.loading = false;

// //   // Show backend message if it exists
// //   if (payload?.message) {
// //     toast.success(payload.message);
// //   }

// //   // Optional: save userId/email if sent by backend
// //   const userId = payload.user?.id || payload.user_id || payload.data?.user_id;
// //   if (userId) {
// //     localStorage.setItem("Id", userId);
// //     state.userId = userId;
// //   }

// //   state.email = payload.user?.email || payload.email || payload.data?.email || "";
// //     })


// //       // Registration rejected
// //       .addCase(authRegistration.rejected, (state, { payload }) => {
// //         state.loading = false;
// //         toast.error(payload?.message || "Registration failed");
// //       })
// //        //otp
// //       .addCase(authOtp.pending, (state, { payload }) => {
// //         state.loading=true;
// //       })
// //       .addCase(authOtp.fulfilled, (state, { payload }) => {
// //         state.loading=false;
// //         if (payload.status === true) {
// //           state.isOtpverified = true;
// //         //   toast.success(payload.message||"OTP verified successfully");
// //         }
// //         else{
// //             toast.error(payload?.message||"Invalid OTP");
// //         }
// //       })
// //       .addCase(authOtp.rejected, (state, { payload }) => {
// //         state.loading=false;
// //         toast.error(payload?.message || "OTP verification failed");
// //       })
// //   },
  
// // });

// // export default authSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import { toast } from "sonner";
// import endPoints from "@/app/api/endPoints/endPoints";

// // ==================== Types ====================
// interface AuthState {
//   email: string;
//   isOtpverified: boolean;
//   loading: boolean;
//   isLoggedIn: boolean;
// }

// const initialState: AuthState = {
//   email: "",
//   isOtpverified: false,
//   loading: false,
//   isLoggedIn: false,
// };

// // ==================== Async Thunks ====================

// // Registration (unchanged)
// export const authRegistration = createAsyncThunk(
//   "auth/authRegistration",
//   async (payload: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(endPoints.auth.signup, payload, {
//         headers: { "Content-Type": "application/json" },
//       });

//       return response.data;
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Registration failed");
//       return rejectWithValue(error.response?.data || { message: "Registration failed" });
//     }
//   }
// );

// // Verify OTP
// export const authOtp = createAsyncThunk(
//   "auth/authOtp",
//   async (payload: { email: string; otp: string }, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(endPoints.auth.otp, payload, {
//         headers: { "Content-Type": "application/json" },
//       });
//       console.log("OTP response from backend:", response.data); 
//       return response.data;
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "OTP verification failed");
//       return rejectWithValue(error.response?.data || { message: "OTP verification failed" });
//     }
//   }
// );

// // Optional: Resend OTP
// // export const resendOtp = createAsyncThunk(
// //   "auth/resendOtp",
// //   async (payload: { email: string }, { rejectWithValue }) => {
// //     try {
// //       const response = await AxiosInstance.post(endPoints.auth.resendOtp, payload, {
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       toast.success(response.data?.message || "OTP resent successfully");
// //       return response.data;
// //     } catch (error: any) {
// //       toast.error(error.response?.data?.message || "Failed to resend OTP");
// //       return rejectWithValue(error.response?.data || { message: "Failed to resend OTP" });
// //     }
// //   }
// // );



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";
import { toast } from "sonner";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const initialState = {
  loading: false,
  email: "",
  isLoggedIn: false,
  isOtpverified: false,
  error: null,
};

// ---------------- Registration Request ----------------
export const authRegistration = createAsyncThunk(
  "auth/authRegistration",
  async (payload: { username: string; email: string; password: string; role?: string }, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post(endPoints.auth.signup, payload, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: "Registration failed" });
    }
  }
);

// ---------------- Verify Registration OTP (Step 2) ----------------
export const authOtp = createAsyncThunk(
  "auth/authOtp",
  async (payload: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        endPoints.auth.otp,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      // Extract token if provided
      const token = response.data?.token || response.data?.access || response.data?.access_token;
      
      if (token) {
        cookies.set("token", token, { 
          path: "/", 
          maxAge: 60 * 60 * 24 * 7, // 7 days
          sameSite: "lax",
        });
      }

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: "OTP verification failed" });
    }
  }
);

// ---------------- Login Request (Step 1) ----------------
export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post(endPoints.auth.signin, payload, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: "Login failed" });
    }
  }
);

// ---------------- Verify Login OTP (Step 2) ----------------
export const authLoginOtp = createAsyncThunk(
  "auth/authLoginOtp",
  async (payload: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(
        endPoints.auth.signinOtp,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      // --- CRITICAL STEP ---
      // We extract the token here immediately so we can log it for debugging
      const token = response.data?.token || response.data?.access || response.data?.access_token;
      
      if (token) {
        cookies.set("token", token, { 
          path: "/", 
          maxAge: 86400, // 24 hours
          sameSite: 'lax'
        });
        console.log("Token successfully stored in cookies.");
      }

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || { message: "Login OTP failed" });
    }
  }
);

// ---------------- Slice Definition ----------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetOtp: (state) => {
      state.isOtpverified = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = "";
      cookies.remove("token", { path: "/" });
      localStorage.removeItem("email");
      toast.success("Logged out successfully");
    }
  },
  extraReducers: (builder) => {
    // --- Registration ---
    builder
      .addCase(authRegistration.pending, (state) => {
        state.loading = true;
      })
      .addCase(authRegistration.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload?.status === true || payload?.message?.includes("successful")) {
          const email = payload?.email || payload?.user?.email || "";
          state.email = email;
          if (email) localStorage.setItem("email", email);
          toast.success(payload?.message || "Registration successful! Please verify OTP");
        }
      })
      .addCase(authRegistration.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload?.message || "Registration failed");
      });

    // --- REGISTRATION OTP (Step 2) ---
    builder
      .addCase(authOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(authOtp.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload?.status === true || payload?.token || payload?.access) {
          state.isOtpverified = true;
          toast.success(payload?.message || "OTP verified successfully!");
        } else {
          toast.error(payload?.message || "Invalid OTP");
        }
      })
      .addCase(authOtp.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload?.message || "OTP verification failed");
      });

    // --- Login (Step 1) ---
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        // Adjust based on your backend structure (some use .status, some use .user)
        if (payload?.status === true || payload?.message?.includes("OTP")) {
          const email = payload?.email || payload?.user?.email || "";
          state.email = email;
          if (email) localStorage.setItem("email", email);
          toast.success(payload?.message || "OTP sent to your email");
        }
      })
      .addCase(authLogin.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload?.message || "Invalid credentials");
      });

    // --- LOGIN OTP (The Final Verification) ---
    builder
      .addCase(authLoginOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(authLoginOtp.fulfilled, (state, { payload }) => {
        state.loading = false;

        // Verify if the login was successful
        if (payload?.status === true || payload?.token || payload?.access) {
          state.isLoggedIn = true;
          state.isOtpverified = true;
          toast.success(payload.message || "Welcome to Zingo!");
        } else {
          toast.error(payload?.message || "Invalid OTP");
        }
      })
      .addCase(authLoginOtp.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload?.message || "OTP verification failed");
      });
  },
});

export const { resetOtp, logout } = authSlice.actions;
export default authSlice.reducer;
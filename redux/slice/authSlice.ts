
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import { toast } from "sonner";
// import endPoints from "@/app/api/endPoints/endPoints";


// // Initial state
// const initialState = {
//   isOtpverified: false,
//   email: "",
//   userId: null,
//   loading: false,
// };

// // ==================== Async Thunk ====================
// export const authRegistration = createAsyncThunk(
//   "auth/authRegistration",
//   async (payload, { rejectWithValue }) => {
//     try {
//       // Axios POST request with JSON payload
//       const response = await AxiosInstance.post(endPoints.auth.signup, payload, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       console.log("Backend response data:", response.data.message);
//       return response.data;
//     }catch (error) {
  
//   toast.error(error.response?.data?.message || "Registration failed");
//   return rejectWithValue(error.response?.data || { message: "Registration failed" });
// }

//     // } catch (error) {
//     //   // Reject with backend error or fallback toast
//     //   toast.error(error.response?.data?.message || "Registration failed");
//     //   return rejectWithValue(error.response?.data || { message: "Registration failed" });
//     // }
//   }
// );
// export const authOtp = createAsyncThunk(
//   "auth/authOtp",
//   async (payload: { userId: string; otp: string }, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(
//         endPoints.auth.otp,
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       return response.data;
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "OTP verification failed");
//       return rejectWithValue(
//         error.response?.data || { message: "OTP verification failed" }
//       );
//     }
//   }
// );

// // ==================== Slice ====================
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Registration pending
//       .addCase(authRegistration.pending, (state) => {
//         state.loading = true;
//       })


//     .addCase(authRegistration.fulfilled, (state, { payload }) => {
//   state.loading = false;

//   // Show backend message if it exists
//   if (payload?.message) {
//     toast.success(payload.message);
//   }

//   // Optional: save userId/email if sent by backend
//   const userId = payload.user?.id || payload.user_id || payload.data?.user_id;
//   if (userId) {
//     localStorage.setItem("Id", userId);
//     state.userId = userId;
//   }

//   state.email = payload.user?.email || payload.email || payload.data?.email || "";
//     })


//       // Registration rejected
//       .addCase(authRegistration.rejected, (state, { payload }) => {
//         state.loading = false;
//         toast.error(payload?.message || "Registration failed");
//       })
//        //otp
//       .addCase(authOtp.pending, (state, { payload }) => {
//         state.loading=true;
//       })
//       .addCase(authOtp.fulfilled, (state, { payload }) => {
//         state.loading=false;
//         if (payload.status === true) {
//           state.isOtpverified = true;
//         //   toast.success(payload.message||"OTP verified successfully");
//         }
//         else{
//             toast.error(payload?.message||"Invalid OTP");
//         }
//       })
//       .addCase(authOtp.rejected, (state, { payload }) => {
//         state.loading=false;
//         toast.error(payload?.message || "OTP verification failed");
//       })
//   },
  
// });

// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import { toast } from "sonner";
import endPoints from "@/app/api/endPoints/endPoints";
import { stat } from "node:fs";


// ==================== Types ====================
interface AuthState {
  email: string;
  isOtpverified: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  email: "",
  isOtpverified: false,
  loading: false,
};

// ==================== Async Thunks ====================

// Registration (unchanged)
export const authRegistration = createAsyncThunk(
  "auth/authRegistration",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(endPoints.auth.signup, payload, {
        headers: { "Content-Type": "application/json" },
      });

      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Registration failed");
      return rejectWithValue(error.response?.data || { message: "Registration failed" });
    }
  }
);

// Verify OTP
export const authOtp = createAsyncThunk(
  "auth/authOtp",
  async (payload: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(endPoints.auth.otp, payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("OTP response from backend:", response.data); 
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "OTP verification failed");
      return rejectWithValue(error.response?.data || { message: "OTP verification failed" });
    }
  }
);

// Optional: Resend OTP
// export const resendOtp = createAsyncThunk(
//   "auth/resendOtp",
//   async (payload: { email: string }, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(endPoints.auth.resendOtp, payload, {
//         headers: { "Content-Type": "application/json" },
//       });
//       toast.success(response.data?.message || "OTP resent successfully");
//       return response.data;
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Failed to resend OTP");
//       return rejectWithValue(error.response?.data || { message: "Failed to resend OTP" });
//     }
//   }
// );

// ==================== Slice ====================
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetOtp: (state) => {
      state.isOtpverified = false;
    },
  },
  extraReducers: (builder) => {
    // ---------------- Registration ----------------
    builder
      .addCase(authRegistration.pending, (state) => {
        state.loading = true;
      })
      .addCase(authRegistration.fulfilled, (state, { payload }) => {
        state.loading = false;
        
        const email=payload.user?.email || payload.email || "";
        state.email=email;
        if (email) {
        localStorage.setItem("otp_email",email);
        if (payload?.message) toast.success(payload.message);
    }
      })
      .addCase(authRegistration.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload?.message || "Registration failed");
      });

    // ---------------- OTP ----------------
    builder
      .addCase(authOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(authOtp.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.status === true) {
          state.isOtpverified = true;
            
          toast.success(payload.message||"OTP verified successfully");
        } else {
            
          toast.error(payload?.message || "Invalid OTP");
        }
      })
      .addCase(authOtp.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload?.message || "OTP verification failed");
      });

    // // ---------------- Resend OTP ----------------
//     builder
//       .addCase(resendOtp.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(resendOtp.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(resendOtp.rejected, (state, { payload }) => {
//         state.loading = false;
//         toast.error(payload?.message || "Failed to resend OTP");
//       });
  },
});

// export const { resendOtp } = authSlice.actions;

export default authSlice.reducer;


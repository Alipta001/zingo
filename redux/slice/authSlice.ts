import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import {toast} from "sonner";
import endPoints from "@/app/api/endPoints/endPoints";

const initialState = {
    isOtpverified: false,
    email:"",
};
 export const authRegistration = createAsyncThunk(
    "authRegistration",
    async(payload)=>{
        const response = await AxiosInstance.post(endPoints.auth.signup, payload);
        return response.data;
    }
 );

//  export const authOtp= createAsyncThunk(
//     "authOtp",async(payload)=>{
//         const res = await AxiosInstance.post(endPoints.auth.otp, payload);
//         return res.data;
//     }
//  );
 const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //Registration
        .addCase(authRegistration.pending, (state,{payload})=>{})

        .addCase(authRegistration.fulfilled, (state,{payload})=>{
            if(payload.success){
                localStorage.setItem("Id", payload.user.id);
                state.email = payload.user.email;
                toast.success(payload.message);
            }
        })
        .addCase(authRegistration.rejected, (state,{payload})=>{})
    }
 });
    export default authSlice;
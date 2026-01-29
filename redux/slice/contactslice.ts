import AxiosInstance from "@/api/axios/axios";
import endPoints from "@/api/endPoints/endPoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    data : [],
    loading: false,
    error: null
}

export const contactFormSubmit = createAsyncThunk(
    "contact/submit",
    async (payload, { rejectWithValue })=>{
        try{
            const response = await AxiosInstance.post(endPoints.contact.email, payload)
            console.log(response.data)
            return response.data;   
        }catch(error){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(contactFormSubmit.pending, (state) => {
                state.loading = true;
            })
            .addCase(contactFormSubmit.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(contactFormSubmit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export default contactSlice;
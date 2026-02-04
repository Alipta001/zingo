import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const sendContact = createAsyncThunk(
  "contact/sendContact",
  async (payload: { name: string; email: string; message: string }, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post("/contact-api/send-message/", payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || { message: "Failed to send message" });
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(sendContact.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload?.message || "Failed";
      });
  },
});

export const contactFormSubmit = sendContact; // Alias for compatibility
export default contactSlice.reducer;

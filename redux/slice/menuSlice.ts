import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const resturantWiseItem = createAsyncThunk(
  "resturantMenu",
  async (id, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        `${endPoints.menu.resturantMenu}/${id}`,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/* export const fetchResturantById = createAsyncThunk("resturantById", async(id, { rejectWithValue })=>{
  try{
    const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}`)
    console.log(response)
    return response.data
  }catch(error){
     return rejectWithValue(error.message);
  }
}) */

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resturantWiseItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resturantWiseItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(resturantWiseItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    /* .addCase(fetchResturantById.pending, (state) => {
        state.details.loading = true;
        state.details.error = null;
      })
      .addCase(fetchResturantById.fulfilled, (state, action) => {
        state.details.loading = false;
        state.details.data = action.payload;
      })
      .addCase(fetchResturantById.rejected, (state, action) => {
        state.details.loading = false;
        state.details.error = action.payload;
      }); */
  },
});

export default menuSlice;

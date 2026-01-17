import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/api/axios/axios";
import endPoints from "@/api/endPoints/endPoints";

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
        `${endPoints.menu.resturantMenu}/${id}`
      );
      console.log(response)
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchByItem = createAsyncThunk("searchResturantByItem", async(value,{rejectWithValue})=>{
  try{
    const response = await AxiosInstance.get(`${endPoints.menu.searchItem}/?q=${value}`)
    console.log(response)
    return response.data
  }catch(error){
    return rejectWithValue(error.message)
  }
})

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
      })


      .addCase(searchByItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchByItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchByItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default menuSlice;
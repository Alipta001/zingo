/* import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/api/axios/axios";
import endPoints from "@/api/endPoints/endPoints";

const initialState = {
    data: [{}] as any[],
};
export const resturantList = createAsyncThunk("resturantList", async () => {
    const response = await AxiosInstance.get(endPoints.resturant.resturantList);
    return response;
})

const resturantSlice = createSlice({
    name: "resturantSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder)=>{
        builder

            .addCase(resturantList.pending, (state, { payload }) => {

            })

        .addCase(resturantList.fulfilled, (state, { payload }) => {
                state.data = payload.data
            })

        .addCase(resturantList.rejected, (state, { payload }) => {

        })
}
} 
)
export default resturantSlice; */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/api/axios/axios";
import endPoints from "@/api/endPoints/endPoints";

const initialState = {
 list:{
data: [],
  loading: false,
  error: null,
 },
 details:{
  data: {},
  loading: false,
  error: null
 }
};

export const resturantList = createAsyncThunk(
  "resturant",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        endPoints.resturant.resturantList
      );
      console.log(response)
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchResturantById = createAsyncThunk("resturantById", async(id, { rejectWithValue })=>{
  try{
    const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}`)
    console.log(response)
    return response.data
  }catch(error){
     return rejectWithValue(error.message);
  }
})

const resturantSlice = createSlice({
  name: "resturants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resturantList.pending, (state,) => {
        state.list.loading = true;
        state.error = null;
      })
      .addCase(resturantList.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.data = action.payload;
      })
      .addCase(resturantList.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload;
      })


      .addCase(fetchResturantById.pending, (state) => {
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
      });
  },
});

export default resturantSlice.reducer;

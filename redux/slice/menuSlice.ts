// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export const resturantWiseItem = createAsyncThunk(
//   "resturantMenu",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.get(
//         `${endPoints.menu.resturantMenu}/${id}`,
//       );
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const searchByItem = createAsyncThunk("searchResturantByItem", async(value,{rejectWithValue})=>{
//   try{
//     const response = await AxiosInstance.get(`${endPoints.menu.searchItem}/?q=${value}`)
//     console.log(response)
//     return response.data
//   }catch(error){
//     return rejectWithValue(error.message)
//   }
// })

// /* export const fetchResturantById = createAsyncThunk("resturantById", async(id, { rejectWithValue })=>{
//   try{
//     const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}`)
//     console.log(response)
//     return response.data
//   }catch(error){
//      return rejectWithValue(error.message);
//   }
// }) */

// const menuSlice = createSlice({
//   name: "menu",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(resturantWiseItem.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(resturantWiseItem.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(resturantWiseItem.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(searchByItem.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(searchByItem.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(searchByItem.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default menuSlice;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Fetch items for a specific restaurant
export const resturantWiseItem = createAsyncThunk(
  "menu/resturantWiseItem",
  async (id, { rejectWithValue }) => {
    try {
      console.log("Dispatching API call for ID:", id);
      const response = await AxiosInstance.get(
        `${endPoints.menu.resturantMenu}/${id}`
      );
      
      // Axios returns the server response in response.data
      console.log("API Success:", response.data);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.detail || error.message || "Failed to fetch";
      console.error("API Error:", message);
      return rejectWithValue(message);
    }
  }
);

// Search items across restaurants
export const searchByItem = createAsyncThunk(
  "menu/searchByItem",
  async (value, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(
        `${endPoints.menu.searchItem}/?q=${value}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Search failed");
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    clearMenu: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* RESTAURANT WISE ITEMS */
      .addCase(resturantWiseItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resturantWiseItem.fulfilled, (state, action) => {
        state.loading = false;
        /**
         * Logic check: 
         * 1. If action.payload is the array directly (Status 200 log suggests this).
         * 2. If it's wrapped in a .data property.
         */
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
        } else if (action.payload && Array.isArray(action.payload.data)) {
          state.data = action.payload.data;
        } else {
          state.data = []; 
        }
      })
      .addCase(resturantWiseItem.rejected, (state, action) => {
        state.loading = false;
        // This sets the error message you see in the UI
        state.error = action.payload;
      })

      /* SEARCH ITEMS */
      .addCase(searchByItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchByItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = Array.isArray(action.payload) 
          ? action.payload 
          : action.payload?.results || [];
      })
      .addCase(searchByItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMenu } = menuSlice.actions;

// CRITICAL FIX: Export the REDUCER, not the slice object
export default menuSlice;
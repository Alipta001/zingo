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
      
      // ✅ Validate ID parameter
      if (!id) {
        return rejectWithValue("Restaurant ID is required");
      }

      const response = await AxiosInstance.get(
        `${endPoints.menu.resturantMenu}/${id}`
      );
      
      // ✅ Validate response status is 2xx
      if (!response || response.status === undefined) {
        return rejectWithValue("Invalid server response");
      }

      // ✅ Axios returns the server response in response.data
      console.log("API Success:", response.data);
      return response.data;
    } catch (error: any) {
      // ✅ Improved error handling - extract meaningful message
      let message = "Failed to fetch menu items";
      
      if (error.message) {
        message = error.message;
      } else if (error.detail) {
        message = error.detail;
      } else if (error.data?.message) {
        message = error.data.message;
      } else if (error.data?.detail) {
        message = error.data.detail;
      }

      console.error("Menu API Error:", message, error);
      return rejectWithValue(message);
    }
  }
);

// Search items across restaurants
export const searchByItem = createAsyncThunk(
  "menu/searchByItem",
  async (value, { rejectWithValue }) => {
    try {
      if (!value || value.trim().length === 0) {
        return rejectWithValue("Search query cannot be empty");
      }

      const response = await AxiosInstance.get(
        `${endPoints.menu.searchItem}/?q=${value}`
      );
      
      if (!response?.data) {
        return rejectWithValue("Invalid response from server");
      }

      return response.data;
    } catch (error: any) {
      let message = "Search failed";
      
      if (error.message) {
        message = error.message;
      } else if (error.detail) {
        message = error.detail;
      } else if (error.data?.message) {
        message = error.data.message;
      }

      console.error("Menu Search Error:", message);
      return rejectWithValue(message);
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
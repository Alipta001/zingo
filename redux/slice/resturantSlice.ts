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
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

const initialState = {
  list: {
    data: [],
    loading: false,
    error: null,
  },
  details: {
    data: {},
    loading: false,
    error: null
  }
};

// --- Fetch All Restaurants ---
export const resturantList = createAsyncThunk(
  "resturants/resturantList", // Consistent naming
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(endPoints.resturant.resturantList);
      
      // ✅ Validate response
      if (!response?.data) {
        return rejectWithValue("Invalid response from server");
      }
      
      return response.data;
    } catch (error: any) {
      // ✅ Improved error extraction
      let message = "Failed to fetch restaurants";
      
      if (error.message) {
        message = error.message;
      } else if (error.detail) {
        message = error.detail;
      } else if (error.data?.message) {
        message = error.data.message;
      }

      console.error("Restaurant List Error:", message);
      return rejectWithValue(message);
    }
  },
);

// --- Fetch Restaurant Details ---
export const fetchResturantById = createAsyncThunk(
  "resturants/fetchResturantById",
  async (id: string | number, { rejectWithValue }) => {
    try {
      if (!id) {
        return rejectWithValue("Restaurant ID is required");
      }

      const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}/`);
      
      if (!response?.data) {
        return rejectWithValue("Invalid response from server");
      }

      return response.data;
    } catch (error: any) {
      let message = "Failed to fetch restaurant details";
      
      if (error.message) {
        message = error.message;
      } else if (error.detail) {
        message = error.detail;
      } else if (error.data?.message) {
        message = error.data.message;
      }

      console.error("Restaurant Details Error:", message);
      return rejectWithValue(message);
    }
  }
);

// --- Search Restaurants ---
export const searchByResturant = createAsyncThunk(
  "resturants/searchByResturant",
  async (value: string, { rejectWithValue }) => {
    try {
      if (!value || value.trim().length === 0) {
        return rejectWithValue("Search query cannot be empty");
      }

      const response = await AxiosInstance.get(`${endPoints.resturant.searchResturant}/?q=${value}`);
      
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

      console.error("Restaurant Search Error:", message);
      return rejectWithValue(message);
    }
  }
);

const resturantSlice = createSlice({
  name: "resturants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Restaurant List
      .addCase(resturantList.pending, (state) => {
        state.list.loading = true;
        state.list.error = null;
      })
      .addCase(resturantList.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.data = action.payload;
      })
      .addCase(resturantList.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload as string;
      })

      // Restaurant Details
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
        state.details.error = action.payload as string;
      })

      // Search Logic
      .addCase(searchByResturant.pending, (state) => {
        state.list.loading = true; // Use list loading for search results
        state.list.error = null;
      })
      .addCase(searchByResturant.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.data = Array.isArray(action.payload) ? action.payload : action.payload.data || [];
      })
      .addCase(searchByResturant.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload as string;
      });
  },
});

export default resturantSlice.reducer;
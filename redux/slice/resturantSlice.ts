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
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// const initialState = {
//   list: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   details: {
//     data: {},
//     loading: false,
//     error: null
//   }
// };

// // --- Fetch All Restaurants ---
// export const resturantList = createAsyncThunk(
//   "resturants/resturantList", // Consistent naming
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.get(endPoints.resturant.resturantList);
//       return response.data;
//     } catch (error: any) {
//       // Return the specific error message from the backend (like "Token expired")
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   },
// );

// // --- Fetch Restaurant Details ---
// export const fetchResturantById = createAsyncThunk(
//   "resturants/fetchResturantById",
//   async (id: string | number, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}/`);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// // --- Search Restaurants ---
// export const searchByResturant = createAsyncThunk(
//   "resturants/searchByResturant",
//   async (value: string, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.get(`${endPoints.resturant.searchResturant}/?q=${value}`);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

// const resturantSlice = createSlice({
//   name: "resturants",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Restaurant List
//       .addCase(resturantList.pending, (state) => {
//         state.list.loading = true;
//         state.list.error = null;
//       })
//       .addCase(resturantList.fulfilled, (state, action) => {
//         state.list.loading = false;
//         state.list.data = action.payload;
//       })
//       .addCase(resturantList.rejected, (state, action) => {
//         state.list.loading = false;
//         state.list.error = action.payload as string;
//       })

//       // Restaurant Details
//       .addCase(fetchResturantById.pending, (state) => {
//         state.details.loading = true;
//         state.details.error = null;
//       })
//       .addCase(fetchResturantById.fulfilled, (state, action) => {
//         state.details.loading = false;
//         state.details.data = action.payload;
//       })
//       .addCase(fetchResturantById.rejected, (state, action) => {
//         state.details.loading = false;
//         state.details.error = action.payload as string;
//       })

//       // Search Logic
//       .addCase(searchByResturant.pending, (state) => {
//         state.list.loading = true; // Use list loading for search results
//         state.list.error = null;
//       })
//       .addCase(searchByResturant.fulfilled, (state, action) => {
//         state.list.loading = false;
//         state.list.data = Array.isArray(action.payload) ? action.payload : action.payload.data || [];
//       })
//       .addCase(searchByResturant.rejected, (state, action) => {
//         state.list.loading = false;
//         state.list.error = action.payload as string;
//       });
//   },
// });

// export default resturantSlice.reducer;


import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

interface ResturantState {
  list: {
    data: any[];
    loading: boolean;
    error: string | null;
  };
  details: {
    data: any;
    loading: boolean;
    error: string | null;
  };
}

const initialState: ResturantState = {
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
  "resturants/resturantList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(endPoints.resturant.resturantList);
      return response.data;
    } catch (error: any) {
      // Logic to capture the 401 specifically
      const message = error.response?.status === 401 
        ? "Session expired. Please login again." 
        : (error.response?.data?.message || error.message);
      return rejectWithValue(message);
    }
  },
);

// --- Fetch Restaurant Details ---
export const fetchResturantById = createAsyncThunk(
  "resturants/fetchResturantById",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}/`);
      return response.data;
    } catch (error: any) {
      const message = error.response?.status === 401 
        ? "Unauthorized access. Please login." 
        : (error.response?.data?.message || "Restaurant not found");
      return rejectWithValue(message);
    }
  }
);

// --- Search Restaurants ---
export const searchByResturant = createAsyncThunk(
  "resturants/searchByResturant",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get(`${endPoints.resturant.searchResturant}/?q=${value}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const resturantSlice = createSlice({
  name: "resturants",
  initialState,
  reducers: {
    clearDetails: (state) => {
      state.details.data = {};
      state.details.error = null;
    }
  },
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

      // Search Logic (Updating the LIST, not the details)
      .addCase(searchByResturant.pending, (state) => {
        state.list.loading = true; 
        state.list.error = null;
      })
      .addCase(searchByResturant.fulfilled, (state, action) => {
        state.list.loading = false;
        // Check if payload is the array itself or inside a data property
        state.list.data = Array.isArray(action.payload) ? action.payload : (action.payload?.data || []);
      })
      .addCase(searchByResturant.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload as string;
      });
  },
});

export const { clearDetails } = resturantSlice.actions;
export default resturantSlice.reducer;
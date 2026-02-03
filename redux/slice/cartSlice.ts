// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export const addToCart = createAsyncThunk(
//   "addToCart",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(
//         `${endPoints.cart.add}/`,
//         payload,
//       );
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );


// /* export const fetchResturantById = createAsyncThunk("resturantById", async(id, { rejectWithValue })=>{
//   try{
//     const response = await AxiosInstance.get(`${endPoints.resturant.resturant}/${id}`)
//     console.log(response)
//     return response.data
//   }catch(error){
//      return rejectWithValue(error.message);
//   }
// }) */

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     /* .addCase(fetchResturantById.pending, (state) => {
//         state.details.loading = true;
//         state.details.error = null;
//       })
//       .addCase(fetchResturantById.fulfilled, (state, action) => {
//         state.details.loading = false;
//         state.details.data = action.payload;
//       })
//       .addCase(fetchResturantById.rejected, (state, action) => {
//         state.details.loading = false;
//         state.details.error = action.payload;
//       }); */
//   },
// });

// export default cartSlice;


// redux/slice/cartSlice.ts
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// // ===================== Initial State =====================
// const initialState = {
//   data: [], // existing addToCart data
//   loading: false,
//   error: null,
//   total: 0, // cart total price
// };

// // ===================== Existing addToCart =====================
// export const addToCart = createAsyncThunk(
//   "addToCart",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(
//         `${endPoints.cart.add}`,
//         payload,
//       );
//       console.log(response);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// // ===================== New Thunks =====================

// // Fetch cart
// export const fetchCart = createAsyncThunk(
//   "cart/fetchCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await AxiosInstance.get(endPoints.cart.view);
//       return res.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
//     }
//   }
// );

// // Remove item
// export const removeItem = createAsyncThunk(
//   "cart/removeItem",
//   async (itemId: string, { rejectWithValue }) => {
//     try {
//       await AxiosInstance.post(endPoints.cart.remove, { itemId });
//       return itemId;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || "Failed to remove item");
//     }
//   }
// );

// // Clear cart
// export const clearCart = createAsyncThunk(
//   "cart/clearCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       await AxiosInstance.post(endPoints.cart.clear);
//       return true;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || "Failed to clear cart");
//     }
//   }
// );

// // ===================== Slice =====================
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // Increment quantity locally
//     incrementQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.data.find((i: any) => i.id === action.payload);
//       if (item) item.quantity += 1;
//       state.total = state.data.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);
//     },
//     // Decrement quantity locally
//     decrementQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.data.find((i: any) => i.id === action.payload);
//       if (item && item.quantity > 1) item.quantity -= 1;
//       state.total = state.data.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);
//     },
//   },
//   extraReducers: (builder) => {
//     // ================= Existing addToCart =================
//     builder
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         state.total = state.data.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // ================= Fetch cart =================
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         state.total = state.data.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // ================= Remove item =================
//     builder
//       .addCase(removeItem.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(removeItem.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = state.data.filter((i: any) => i.id !== action.payload);
//         state.total = state.data.reduce((sum: number, i: any) => sum + i.price * i.quantity, 0);
//       })
//       .addCase(removeItem.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });

//     // ================= Clear cart =================
//     builder
//       .addCase(clearCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(clearCart.fulfilled, (state) => {
//         state.loading = false;
//         state.data = [];
//         state.total = 0;
//       })
//       .addCase(clearCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { incrementQuantity, decrementQuantity } = cartSlice.actions;

// export default cartSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

// ===================== Helper Functions =====================
// Centralized logic to prevent "reduce is not a function" errors
const calculateTotal = (items: any) => {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum: number, i: any) => {
    const price = Number(i.price) || 0;
    const qty = Number(i.quantity) || 0;
    return sum + price * qty;
  }, 0);
};

// Ensures data is always an array
const ensureArray = (payload: any) => {
  if (Array.isArray(payload)) return payload;
  if (payload && typeof payload === 'object' && Array.isArray(payload.items)) {
    return payload.items; // Handle Django responses like { items: [...] }
  }
  return []; // Fallback to empty array
};

const initialState = {
  data: [] as any[], 
  loading: false,
  error: null as any,
  total: 0,
};

// ===================== Thunks =====================

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(`${endPoints.cart.add}`, payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.get(endPoints.cart.view);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
    }
  }
);

export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async (itemId: string, { rejectWithValue }) => {
    try {
      await AxiosInstance.post(endPoints.cart.remove, { itemId });
      return itemId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to remove item");
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      await AxiosInstance.post(endPoints.cart.clear);
      return true;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to clear cart");
    }
  }
);

// ===================== Slice =====================
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.data.find((i: any) => i.id === action.payload);
      if (item) item.quantity += 1;
      state.total = calculateTotal(state.data);
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.data.find((i: any) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      state.total = calculateTotal(state.data);
    },
  },
  extraReducers: (builder) => {
    builder
      // Add To Cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = ensureArray(action.payload);
        state.total = calculateTotal(state.data);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = ensureArray(action.payload);
        state.total = calculateTotal(state.data);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Remove Item
      .addCase(removeItem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((i: any) => i.id !== action.payload);
        state.total = calculateTotal(state.data);
      })

      // Clear Cart
      .addCase(clearCart.fulfilled, (state) => {
        state.loading = false;
        state.data = [];
        state.total = 0;
      });
  },
});

export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
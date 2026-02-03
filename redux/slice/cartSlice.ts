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



// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// // ===================== Helper Functions =====================
// // Centralized logic to prevent "reduce is not a function" errors
// const calculateTotal = (items: any) => {
//   if (!Array.isArray(items)) return 0;
//   return items.reduce((sum: number, i: any) => {
//     const price = Number(i.price) || 0;
//     const qty = Number(i.quantity) || 0;
//     return sum + price * qty;
//   }, 0);
// };

// // Ensures data is always an array
// const ensureArray = (payload: any) => {
//   if (Array.isArray(payload)) return payload;
//   if (payload && typeof payload === 'object' && Array.isArray(payload.items)) {
//     return payload.items; // Handle Django responses like { items: [...] }
//   }
//   return []; // Fallback to empty array
// };

// const initialState = {
//   data: [] as any[], 
//   loading: false,
//   error: null as any,
//   total: 0,
// };

// // ===================== Thunks =====================

// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async (payload: any, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(`${endPoints.cart.add}`, payload);
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || error.message);
//     }
//   }
// );

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
//     incrementQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.data.find((i: any) => i.id === action.payload);
//       if (item) item.quantity += 1;
//       state.total = calculateTotal(state.data);
//     },
//     decrementQuantity: (state, action: PayloadAction<string>) => {
//       const item = state.data.find((i: any) => i.id === action.payload);
//       if (item && item.quantity > 1) item.quantity -= 1;
//       state.total = calculateTotal(state.data);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Add To Cart
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = ensureArray(action.payload);
//         state.total = calculateTotal(state.data);
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Fetch Cart
//       .addCase(fetchCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = ensureArray(action.payload);
//         state.total = calculateTotal(state.data);
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Remove Item
//       .addCase(removeItem.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = state.data.filter((i: any) => i.id !== action.payload);
//         state.total = calculateTotal(state.data);
//       })

//       // Clear Cart
//       .addCase(clearCart.fulfilled, (state) => {
//         state.loading = false;
//         state.data = [];
//         state.total = 0;
//       });
//   },
// });

// export const { incrementQuantity, decrementQuantity } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// interface CartState {
//   data: any[];
//   loading: false | true;
//   error: string | null;
//   total: number;
// }

// // ===================== Helper Functions =====================
// const calculateTotal = (items: any[]) => {
//   if (!Array.isArray(items)) return 0;
//   return items.reduce((sum, item) => {
//     // Check for nested menu_item price if DRF returns full objects
//     const price = Number(item.price || item.menu_item?.price) || 0;
//     const qty = Number(item.quantity) || 0;
//     return sum + price * qty;
//   }, 0);
// };

// const ensureArray = (payload: any) => {
//   if (Array.isArray(payload)) return payload;
//   if (payload?.items && Array.isArray(payload.items)) return payload.items;
//   if (payload?.data && Array.isArray(payload.data)) return payload.data;
//   return [];
// };

// const initialState: CartState = {
//   data: [],
//   loading: false,
//   error: null,
//   total: 0,
// };

// // ===================== Thunks =====================

// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async (payload: { menu_item_id: number; quantity: number }, { rejectWithValue }) => {
//     try {
//       // AxiosInstance interceptor handles the Authorization header
//       const response = await AxiosInstance.post(endPoints.cart.add, payload);
//       return response.data;
//     } catch (error: any) {
//       const message = error.response?.data?.detail || error.response?.data?.message || "Auth Required";
//       return rejectWithValue(message);
//     }
//   }
// );

// export const fetchCart = createAsyncThunk(
//   "cart/fetchCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await AxiosInstance.get(endPoints.cart.view);
//       return res.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.detail || "Session Expired");
//     }
//   }
// );

// // ===================== Slice =====================
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // Local UI updates for snappy feel
//     updateLocalQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
//       const item = state.data.find((i) => i.menu_item_id === action.payload.id);
//       if (item) item.quantity = action.payload.qty;
//       state.total = calculateTotal(state.data);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Add To Cart
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         // Usually, the backend returns the updated full cart list
//         state.data = ensureArray(action.payload);
//         state.total = calculateTotal(state.data);
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })

//       // Fetch Cart
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.data = ensureArray(action.payload);
//         state.total = calculateTotal(state.data);
//       });
//   },
// });

// export const { updateLocalQty } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import AxiosInstance from "@/app/api/axios/axios";
// import endPoints from "@/app/api/endPoints/endPoints";

// interface CartState {
//   data: any[];
//   loading: boolean;
//   error: string | null;
//   total: number;
// }

// // ===================== Helper Functions =====================
// const calculateTotal = (items: any[]) => {
//   if (!Array.isArray(items)) return 0;
//   return items.reduce((sum, item) => {
//     const price = Number(item.price || item.menu_item?.price) || 0;
//     const qty = Number(item.quantity) || 0;
//     return sum + price * qty;
//   }, 0);
// };

// const ensureArray = (payload: any) => {
//   if (Array.isArray(payload)) return payload;
//   if (payload?.items && Array.isArray(payload.items)) return payload.items;
//   if (payload?.data && Array.isArray(payload.data)) return payload.data;
//   return [];
// };

// const initialState: CartState = {
//   data: [],
//   loading: false,
//   error: null,
//   total: 0,
// };

// // ===================== Thunks =====================

// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async (payload: { menu_item_id: number; quantity: number }, { rejectWithValue }) => {
//     try {
//       const response = await AxiosInstance.post(endPoints.cart.add, payload);
//       return response.data;
//     } catch (error: any) {
//       const message = error.response?.data?.detail || error.response?.data?.message || "Auth Required";
//       return rejectWithValue(message);
//     }
//   }
// );

// export const fetchCart = createAsyncThunk(
//   "cart/fetchCart",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await AxiosInstance.get(endPoints.cart.view);
//       return res.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.detail || "Session Expired");
//     }
//   }
// );

// // ===================== Slice =====================
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // Updates a specific quantity manually
//     updateLocalQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
//       const item = state.data.find((i) => i.menu_item_id === action.payload.id);
//       if (item) item.quantity = action.payload.qty;
//       state.total = calculateTotal(state.data);
//     },

//     // Increment quantity by 1
//     incrementQuantity: (state, action: PayloadAction<number>) => {
//       const item = state.data.find((i) => i.menu_item_id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//       state.total = calculateTotal(state.data);
//     },

//     // Decrement quantity by 1 (minimum 1)
//     decrementQuantity: (state, action: PayloadAction<number>) => {
//       const item = state.data.find((i) => i.menu_item_id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//       state.total = calculateTotal(state.data);
//     },

//     // Remove item from local state
//     removeItem: (state, action: PayloadAction<number>) => {
//       state.data = state.data.filter((i) => i.menu_item_id !== action.payload);
//       state.total = calculateTotal(state.data);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Add To Cart
//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = ensureArray(action.payload);
//         state.total = calculateTotal(state.data);
//       })
//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })

//       // Fetch Cart
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.data = ensureArray(action.payload);
//         state.total = calculateTotal(state.data);
//       });
//   },
// });

// // Export all actions used by cartItem.tsx
// export const { 
//   updateLocalQty, 
//   incrementQuantity, 
//   decrementQuantity, 
//   removeItem 
// } = cartSlice.actions;

// export default cartSlice.reducer;


"use client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";

interface CartState {
  data: any[];
  loading: boolean;
  error: string | null;
  total: number;
}

// ===================== Helpers =====================

/**
 * MAPPING NOTE: 
 * Your API response returns: { cart_items: Array(2), total_amount: 1150 }
 */
const extractCartData = (payload: any) => {
  if (!payload) return { items: [], total: 0 };
  
  // If the payload itself is the cart object
  const items = payload.cart_items || [];
  const total = payload.total_amount || 0;
  
  return { items, total };
};

const initialState: CartState = {
  data: [],
  loading: false,
  error: null,
  total: 0,
};

// ===================== Thunks =====================

export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue }) => {
  try {
    const res = await AxiosInstance.get(endPoints.cart.view);
    console.log("📥 API Response:", res.data);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.detail || "Failed to load cart");
  }
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload: { menu_item_id: number; quantity: number }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(endPoints.cart.add, payload);
      return response.data; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || "Auth Required");
    }
  }
);

export const removeItemFromApi = createAsyncThunk(
  "cart/removeItem",
  async (itemId: number, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(endPoints.cart.remove, { menu_item_id: itemId });
      return response.data; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || "Could not remove item");
    }
  }
);

export const clearCartApi = createAsyncThunk("cart/clearCart", async (_, { rejectWithValue }) => {
  try {
    await AxiosInstance.post(endPoints.cart.clear);
    return [];
  } catch (error: any) {
    return rejectWithValue("Failed to clear cart");
  }
});

// ===================== Slice =====================
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      /* Fetch Cart */
      .addCase(fetchCart.pending, (state) => { 
        state.loading = true; 
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        const { items, total } = extractCartData(action.payload);
        state.data = items;
        state.total = total;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      
      /* Add / Update / Remove (Assuming API returns the full updated cart object) */
      .addMatcher(
        (action) => [addToCart.fulfilled.type, removeItemFromApi.fulfilled.type].includes(action.type),
        (state, action: any) => {
          state.loading = false;
          const { items, total } = extractCartData(action.payload);
          state.data = items;
          state.total = total;
        }
      )

      /* Clear Cart */
      .addCase(clearCartApi.fulfilled, (state) => {
        state.data = [];
        state.total = 0;
      });
  },
});

export const { resetCartError } = cartSlice.actions;
export default cartSlice.reducer;
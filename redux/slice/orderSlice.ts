import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "@/app/api/axios/axios";
import endPoints from "@/app/api/endPoints/endPoints";
import { toast } from "sonner";

interface OrderState {
  data: any[];
  currentOrder: any;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  data: [],
  currentOrder: null,
  loading: false,
  error: null,
};

// ===================== THUNKS =====================

// Place order
export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (payload: any, { rejectWithValue }) => {
    try {
      console.log("📦 [OrderSlice] Placing order with payload:", payload);
      
      // Call the API
      const res = await AxiosInstance.post(endPoints.order.createOrder, payload, {
        headers: { 
          "Content-Type": "application/json",
          // Note: Token is automatically added by axios interceptor
        },
      });
      
      console.log("✅ [OrderSlice] Order placed successfully:", res.data);
      toast.success("Order placed successfully!");
      return res.data;
    } catch (error: any) {
      // Extract detailed error message from Django response
      let message = "Failed to place order";
      
      if (error?.response?.data) {
        const data = error.response.data;
        message = 
          data?.detail || 
          data?.message || 
          data?.error ||
          data?.non_field_errors?.[0] ||
          data?.user_id?.[0] ||
          (typeof data === "string" ? data : "Failed to place order");
      } else if (error?.message) {
        message = error.message;
      }
      
      const status = error?.response?.status || "unknown";
      console.error(`❌ [OrderSlice] Place order error (${status}):`, message);
      console.error("Full error:", error);
      
      return rejectWithValue(message);
    }
  }
);

// Fetch order history
export const fetchOrderHistory = createAsyncThunk(
  "order/fetchOrderHistory",
  async (userId: string, { rejectWithValue }) => {
    try {
      const url = endPoints.order.listOrders.replace(":id", userId);
      const res = await AxiosInstance.get(url, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("✅ Order history fetched:", res.data);
      return res.data;
    } catch (error: any) {
      const message = error?.message || "Failed to fetch order history";
      console.error("❌ Fetch order history error:", message);
      return rejectWithValue(message);
    }
  }
);

// Get order by ID
export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId: string, { rejectWithValue }) => {
    try {
      const url = endPoints.order.getOrder.replace(":id", orderId);
      const res = await AxiosInstance.get(url, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("✅ Order details fetched:", res.data);
      return res.data;
    } catch (error: any) {
      const message = error?.message || "Failed to fetch order details";
      console.error("❌ Fetch order error:", message);
      return rejectWithValue(message);
    }
  }
);

// ===================== SLICE =====================

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    // -------- PLACE ORDER --------
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentOrder = payload;
        toast.success(payload?.message || "Order placed successfully!");
      })
      .addCase(placeOrder.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload as string;
        toast.error(payload || "Failed to place order");
      });

    // -------- FETCH ORDER HISTORY --------
    builder
      .addCase(fetchOrderHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderHistory.fulfilled, (state, { payload }) => {
        state.loading = false;
        // Handle both array and object responses
        state.data = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.orders)
          ? payload.orders
          : Array.isArray(payload?.data)
          ? payload.data
          : [];
      })
      .addCase(fetchOrderHistory.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload as string;
      });

    // -------- GET ORDER BY ID --------
    builder
      .addCase(getOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.currentOrder = payload;
      })
      .addCase(getOrderById.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload as string;
      });
  },
});

export const { resetCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;

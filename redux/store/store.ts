"use client";
import { configureStore } from "@reduxjs/toolkit";
import resturantReducer from "../slice/resturantSlice";
import menuSlice from "../slice/menuSlice";
import cartReducer from "../slice/cartSlice";
import showDataOnScreenSlice from "../slice/showSlice";
import filterSlice from "../slice/filterSlice";
import contactSlice from "../slice/contactSlice";
import adminViewSlice from "../slice/adminViewSlice";
import authReducer from "../slice/authSlice";
import orderReducer from "../slice/orderSlice";

export const store = configureStore({
  reducer: {
    resturants: resturantReducer,
    menu: menuSlice.reducer,
    cart: cartReducer,
    showDataOnScreen: showDataOnScreenSlice.reducer,
    filters: filterSlice.reducer,
    contact: contactSlice,
    adminView: adminViewSlice.reducer,
    auth: authReducer,
    order: orderReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

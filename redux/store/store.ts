/* "use client"

import { configureStore } from "@reduxjs/toolkit"

import resturantSlice from "../slice/resturantSlice";

export const store = configureStore({
    reducer:{
        resturantList: resturantSlice.reducer
    }
})

export default RootState = store.getState;
export default AppDispatch =  store.dispatch; */

"use client";
import { configureStore } from "@reduxjs/toolkit";
import resturantReducer from "../slice/resturantSlice";
import showDataOnScreenSlice from "../slice/showSlice";
import menuSlice from "../slice/menuSlice";
import cartSlice from "../slice/cartSlice";
import filterSlice from "../slice/filterSlice";
import contactSlice from "../slice/contactSlice";
import authSlice from "../slice/authSlice";
import adminViewSlice from "../slice/adminViewSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    resturants: resturantReducer,
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
    showDataOnScreen: showDataOnScreenSlice.reducer,
    filters: filterSlice.reducer,
    contact: contactSlice.reducer,
    adminView: adminViewSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
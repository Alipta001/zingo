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

export const store = configureStore({
  reducer: {
    resturants: resturantReducer,
    menu: menuSlice.reducer,
    showDataOnScreen: showDataOnScreenSlice.reducer
  },
});

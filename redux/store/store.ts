// /* "use client"

// import { configureStore } from "@reduxjs/toolkit"

// import resturantSlice from "../slice/resturantSlice";

// export const store = configureStore({
//     reducer:{
//         resturantList: resturantSlice.reducer
//     }
// })

// export default RootState = store.getState;
// export default AppDispatch =  store.dispatch; */

// "use client";

// import { configureStore } from "@reduxjs/toolkit";
// import resturantReducer from "../slice/resturantSlice";
// import showDataOnScreenSlice from "../slice/showSlice";
// import menuSlice from "../slice/menuSlice";
// import cartSlice from "../slice/cartSlice";
// import filterSlice from "../slice/filterSlice";
// import contactSlice from "../slice/contactslice";
// import authReducer from "../slice/authSlice";

// export const store = configureStore({
//   reducer: {
//     resturants: resturantReducer,
//     menu: menuSlice.reducer,
//     cart: cartSlice.reducer,
//     showDataOnScreen: showDataOnScreenSlice.reducer,
//     filters: filterSlice.reducer,
//     contact: contactSlice.reducer,
//     auth:authReducer,
//   },
// });

"use client";

import { configureStore } from "@reduxjs/toolkit";
import resturantReducer from "../slice/resturantSlice";
import menuSlice from "../slice/menuSlice";
import cartReducer from "../slice/cartSlice";
import showDataOnScreenSlice from "../slice/showSlice";
import filterSlice from "../slice/filterSlice";
import contactSlice from "../slice/contactslice";
import authReducer from "../slice/authSlice";

export const store = configureStore({
  reducer: {
    resturants: resturantReducer,
    menu: menuSlice.reducer,
    cart: cartReducer,
    showDataOnScreen: showDataOnScreenSlice.reducer,
    filters: filterSlice.reducer,
    contact: contactSlice.reducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

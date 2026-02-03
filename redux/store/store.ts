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

// "use client";
// import { configureStore } from "@reduxjs/toolkit";
// import resturantReducer from "../slice/resturantSlice";
// import menuSlice from "../slice/menuSlice";
// import cartReducer from "../slice/cartSlice";
// import showDataOnScreenSlice from "../slice/showSlice";
// import filterSlice from "../slice/filterSlice";
// import contactSlice from "../slice/contactSlice";
// import authSlice from "../slice/authSlice";
// import adminViewSlice from "../slice/adminViewSlice";
// import authReducer from "../slice/authSlice";

// export const store = configureStore({
//   reducer: {
//     resturants: resturantReducer,
//     menu: menuSlice.reducer,
//     cart: cartReducer,
//     showDataOnScreen: showDataOnScreenSlice.reducer,
//     filters: filterSlice.reducer,
//     contact: contactSlice.reducer,
//     adminView: adminViewSlice.reducer,
//     auth: authReducer,
//   },
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// "use client";
// import { configureStore } from "@reduxjs/toolkit";
// // Ensure these are all importing the DEFAULT export (the reducer)
// import resturantReducer from "../slice/resturantSlice";
// import menu from "../slice/menuSlice";
// import cartReducer from "../slice/cartSlice";
// import showReducer from "../slice/showSlice";
// import filterReducer from "../slice/filterSlice";
// import contactReducer from "../slice/contactSlice";
// import authReducer from "../slice/authSlice";
// import adminViewReducer from "../slice/adminViewSlice";

// export const store = configureStore({
//   reducer: {
//     resturants: resturantReducer,
//     menu: menu.reducer,
//     cart: cartReducer,
//     showDataOnScreen: showReducer,
//     filters: filterReducer,
//     contact: contactReducer,
//     adminView: adminViewReducer,
//     auth: authReducer,
//   },
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

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

export const store = configureStore({
  reducer: {
    resturants: resturantReducer,
    menu: menuSlice.reducer,
    cart: cartReducer,
    showDataOnScreen: showDataOnScreenSlice.reducer,
    filters: filterSlice.reducer,
    contact: contactSlice.reducer,
    adminView: adminViewSlice.reducer,
    auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

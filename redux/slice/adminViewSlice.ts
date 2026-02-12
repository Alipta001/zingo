
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeView: "dashboard",
};

const adminViewSlice = createSlice({
  name: "adminView",
  initialState,
  reducers: {
    setActiveView(state, action) {
      state.activeView = action.payload;
    },
  },
});

export const { setActiveView } = adminViewSlice.actions;
export default adminViewSlice;

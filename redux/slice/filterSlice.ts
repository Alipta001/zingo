import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCuisines: [],
  selectedRating: [],
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedCuisines: (state, action) => {
      state.selectedCuisines = action.payload;
    },
    addCuisine: (state, action) => {
      if (!state.selectedCuisines.includes(action.payload)) {
        state.selectedCuisines.push(action.payload);
      }
    },
    removeCuisine: (state, action) => {
      state.selectedCuisines = state.selectedCuisines.filter(
        (c) => c !== action.payload
      );
    },
    clearAllFilters: (state) => {
      state.selectedCuisines = [];
    },



    setSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
    },
    addRating: (state, action) => {
      if (!state.selectedRating.includes(action.payload)) {
        state.selectedRating.push(action.payload);
      }
    },
    removeRating: (state, action) => {
      state.selectedRating = state.selectedRating.filter(
        (r) => r !== action.payload
      );
    },
  },
});

export const { setSelectedCuisines, addCuisine, removeCuisine, clearAllFilters, setSelectedRating, addRating, removeRating} =
  filterSlice.actions;
export default filterSlice;

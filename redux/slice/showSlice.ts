import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:{
        count: 6,
        count2: 15
    },
    addToCart:{
        quantities:{} as any
    }
}
const showDataOnScreenSlice = createSlice({
    name: "showDataOnScreen",
    initialState,
    reducers:{
        increment(state,action){
            const itemId = action.payload;
            state.list.count +=6;
            state.list.count2 +=6;
            // start from 0 -> first increment becomes 1
            state.addToCart.quantities[itemId] =
        (state.addToCart.quantities[itemId] ?? 0) + 1;
        },
        decrement(state,action){
            const itemId = action.payload;
            const current = state.addToCart.quantities[itemId] ?? 0;
            if (current > 1) {
        state.addToCart.quantities[itemId] = current - 1;
            } else {
                // remove key when it reaches 0 for clean state
                delete state.addToCart.quantities[itemId];
            }
    }
    },
})
export const {increment, decrement} =showDataOnScreenSlice.actions;
export default showDataOnScreenSlice
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
            state.addToCart.quantities[itemId] =
        (state.addToCart.quantities[itemId] || 1) + 1;
        },
        decrement(state,action){
            const itemId = action.payload;
            if (state.addToCart.quantities[itemId] > 1) {
        state.addToCart.quantities[itemId] -= 1;
        }
    }
    },
})
export const {increment, decrement} =showDataOnScreenSlice.actions;
export default showDataOnScreenSlice
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count: 6
}
const showDataOnScreenSlice = createSlice({
    name: "showDataOnScreen",
    initialState,
    reducers:{
        increament(state){
            state.count +=6
        }
    },
})
export const {increament} =showDataOnScreenSlice.actions;
export default showDataOnScreenSlice
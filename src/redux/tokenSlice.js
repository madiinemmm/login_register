import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: ''
}
const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        add: () => {

        }, 
        remove: () => {

        }
    }
})

export const {add, remove} = tokenSlice.actions;
export default tokenSlice.reducer;
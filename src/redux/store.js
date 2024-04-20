import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import userReducer from "./user.Slice";

export const store = configureStore({
    reducer: {
        users: userReducer, 
        token: tokenReducer
    }
});

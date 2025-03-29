import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../reducers/authReducer'
export const store=configureStore({
    reducer:{
        auth:AuthReducer
    }
})
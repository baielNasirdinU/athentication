import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLoading:false,
    user:null,
    error:null,
    logged:false
}
export const authSlice=createSlice({
    name:'baiel',
    initialState,
    reducers:{
        userStart:(state)=>{
            state.isLoading=true
        },
        userSucces:(state,actions)=>{
            state.isLoading=false
            state.user=actions.payload
            state.logged=true
        },   
          userFailure:(state,actions)=>{
            state.isLoading=false
            state.error=actions.payload
        },
    }

})
export const {userFailure,userStart,userSucces}=authSlice.actions
export default authSlice.reducer
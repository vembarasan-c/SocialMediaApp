import { createSlice } from "@reduxjs/toolkit";


const postSlice =  createSlice({
    name:"post",
    initialState:{
        value:[],
    },
    reducers:{
        addPost: ( state, action) => {
            state.value.unshift(action.payload);
        },
        addAllPost: (state, action) => {
            state.value = [];
            
            state.value.push(...action.payload);
        },  
    }

})





export const  {addPost, addAllPost} = postSlice.actions;
export const selectedPost = (state) => state.post.value;
export default postSlice;


import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        // 1) add to wishlist
        addToCart:(state, actions)=>{
            state.push(actions.payload)
        },

        // 2) delete frrom wishlist
        removeFromCart:(state, actions)=>{
            return state.filter((item)=>item.id!=actions.payload)
        }

    }
})


export const {addToCart, removeFromCart} =cartSlice.actions

export default cartSlice.reducer
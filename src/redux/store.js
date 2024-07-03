import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";



const store = configureStore({
    reducer:{
        WishlistReducer : wishlistSlice,
        CartReducer : cartSlice
    }
})


export default store
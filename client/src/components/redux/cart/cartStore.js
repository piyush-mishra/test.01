import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


// Centralize all Reducer 

const store = configureStore({
   reducer : {
    cart : cartReducer,
   }
});

export default store;
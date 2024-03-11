
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
 cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
 cartTotalQuantity: 0,
 cartTotalAmount: 0
};

const cartSlice = createSlice({
     name:'cart',
     initialState : initialState,
     reducers : {
        add(state,action){
          const itemIndex = state.cartItems.findIndex(item => item.sku === action.payload.sku);
          if(itemIndex >= 0){
            state.cartItems[itemIndex].cartQuantity +=1;
          }else{
            const tempProduct = {...action.payload,cartQuantity:1};
            state.cartItems.push(tempProduct);
          }
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        remove(state,action){
            const nextCartItem =  state.cartItems.filter((cart) => cart.sku !== action.payload.sku);
            state.cartItems = nextCartItem;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
          },
        decreaseCart(state,action){
          const itemIndex = state.cartItems.findIndex(cartItem => cartItem.sku=== action.payload.sku);
          if(state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity -=1;
          }else if(state.cartItems[itemIndex].cartQuantity === 1){
            const nextCartItem =  state.cartItems.filter((cart) => cart.sku !== action.payload.sku);
            state.cartItems = nextCartItem;
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
          }
        }
     }
});

export const { add, remove , decreaseCart} = cartSlice.actions;

export default cartSlice.reducer;
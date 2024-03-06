import { ADD_TO_CART, REMOVE_TO_CART } from "../../Constant/constant";


export const action =(data) => {
  console.log('action ',data);
  return {
    type:ADD_TO_CART,
    data:data
  };
}

export const removeToCart =(data) => {
  console.log('action ',data);
  return {
    type:REMOVE_TO_CART,
    data:data
  };
}
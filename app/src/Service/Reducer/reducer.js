import { ADD_TO_CART, REMOVE_TO_CART } from "../../Constant/constant";

const initialState={cardData:[]};

export default function cartItem(state=[], action){
    console.log('reducer ',action);
    switch(action.type){
        case ADD_TO_CART : 
         return [
            ...state,
            {cardData:action.data}
         ]
         break;
         case REMOVE_TO_CART : 
         state.pop();
         return [
            ...state,
           
         ]
         break;
         default:
            return state;
    }

}
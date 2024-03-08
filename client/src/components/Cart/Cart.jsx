import React from 'react'

import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cart/cartSlice';

function Cart() {

     const item = useSelector((state)=> state.cart);
     const dispatch =  useDispatch();

    const CARDS_DATA = [
        {
         id:1,
         title:'Valeria Two-Layer Tank',
         oldPrice:19,
         desc:'Valeria Two-Layer Tank ',
         mainImg:'https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=',
         secondImg:'https://media.istockphoto.com/id/1303467039/photo/young-working-hard-to-satisfy-all-her-online-fashion-shop-customers.jpg?s=1024x1024&w=is&k=20&c=QtVN-1O3y0PJWzXDEGwOi4P9jAtofozdoIUPlEfHXMA=',
         price:12,
         isNew:true
        },
        {
            id:2,
            desc:'Valeria Two-Layer Tank ',
            title:'Valeria Two-Layer Tank',
        oldPrice:1119,
        mainImg:'https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=',
         secondImg:'https://media.istockphoto.com/id/1303467039/photo/young-working-hard-to-satisfy-all-her-online-fashion-shop-customers.jpg?s=1024x1024&w=is&k=20&c=QtVN-1O3y0PJWzXDEGwOi4P9jAtofozdoIUPlEfHXMA=',
        price:5512
      }      
      ];

      const deleteItem = () => {
          dispatch(remove({id:1}))
      }
  return (
    <div className='cart'>
      <h1>Product in your Cart</h1>
        {CARDS_DATA?.map(item => (
            <div className='item' key={item.id}> 
             <img src={item.mainImg} alt="" />
             <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className="price"> 1 X ${item.price}</div>
             </div>
             <DeleteOutlinedIcon className='delete' onClick={()=>deleteItem()}></DeleteOutlinedIcon>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">
            Reset Cart
        </span>
    </div>
  )
}

export default Cart

import React, { useEffect } from 'react'
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove ,decreaseCart, getTotal} from '../redux/cart/cartSlice';

function Cart() {

     const items = useSelector((state)=> state.cart);
     const dispatch =  useDispatch();
     console.log(items);
     
     useEffect(()=>{
        dispatch(getTotal());
     },[items])

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

      const deleteItem = (item) => {
          dispatch(remove(item))
      };

      const decreaseItem = (item) => {
        dispatch(decreaseCart(item));
      };

      const addItem = (item)=>{
        dispatch(add(item));
      }


  return (
    <div className='cart'>
      <h1>Product in your Cart</h1>
        {/* {CARDS_DATA?.map(item => (
            <div className='item' key={item.id}> 
             <img src={item.mainImg} alt="" />
             <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <div className="price"> 1 X ${item.price}</div>
             </div>
             <DeleteOutlinedIcon className='delete' onClick={()=>deleteItem()}></DeleteOutlinedIcon>
            </div>
        ))} */}
        {items?.cartItems?.map(item => (
            <div className='item' data-sku={item.sku} key={item.sku}> 
             <img src={item.thumbnail.url} alt="" />
             <div className="details">
                <h1>{item.name}</h1>
                <p dangerouslySetInnerHTML={{__html:`${item.description.html}`}}></p>
                <div className="price"> 
                <button className='cartbutton' onClick={() => decreaseItem(item)}>-</button>
                    <div>{item.cartQuantity}</div> 
                <button className='cartbutton' onClick={()=>addItem(item)}>+</button>
                X ${item.price_range.maximum_price.final_price.value}
                     = ${item.price_range.maximum_price.final_price.value * item.cartQuantity}
                </div>
             </div>
             <DeleteOutlinedIcon className='delete' onClick={()=>deleteItem(item)}></DeleteOutlinedIcon>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${items.cartTotalAmount}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">
            Reset Cart
        </span>
    </div>
  )
}

export default Cart

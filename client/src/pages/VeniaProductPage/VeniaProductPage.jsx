import React, { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import {add,decreaseCart} from '../../components/redux/cart/cartSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAIL_BY_URL } from '../../queries/useGetProductDetail';
import { useParams } from 'react-router-dom';



const VeniaProductPage = () => {

  const images = ["https://venia.magento.com/media/catalog/product/v/t/vt11-ll_main.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  "https://venia.magento.com/media/catalog/product/v/t/vt11-ll_back.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
]


const id = useParams().id;
//console.log(id);
  
const [veniaimage,setVeniaImage] = useState("");


 const cartItem = useSelector(state => state.cart);
 console.log(cartItem);
 const dispatch =  useDispatch();

 const handleAdd = (product) => {
    //console.log('Add');
    dispatch(add(product))
    //Add Product in Cart.
    //Dispatch Action will be handled by reducer.
 }

 const removeItem = (product)=>{
  dispatch(decreaseCart(product));
 }



 const { loading, error, data}  = useQuery(GET_PRODUCT_DETAIL_BY_URL,{
  variables : {'productName':id}
 });
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;


  //console.log(data);

  
  const mainHeight = {height: '650px'};

  return (
    <>
    <div className="product">
      <div className="left">
        <div className="images">
          <img loading="lazy" src={data?.products?.items[0].media_gallery[0].url} alt=""  onClick={()=> setVeniaImage(`${data?.products?.items[0].media_gallery[0].url}`)}/>
          <img loading="lazy" src={data?.products?.items[0].media_gallery[1].url} alt=""  onClick={()=> setVeniaImage(`${data?.products?.items[0].media_gallery[1].url}`)}/>
        </div>
        <div className="mainimg">
          {loading ? '' : <img loading='lazy' src={veniaimage==='' ? data?.products?.items[0].media_gallery[0].url : veniaimage} data-source={veniaimage} alt="" style={mainHeight} />}
        </div>
      </div>
      <div className="right">
        <h1>{data?.products?.items[0].name}</h1>
        <span className='price'>${data?.products?.items[0].price_range.minimum_price.final_price.value}</span>
        <p dangerouslySetInnerHTML={{__html:`${data?.products?.items[0].description.html}`}}/>
        <div className="quantity">
          <button onClick={()=> removeItem(data?.products?.items[0])}>-</button>
          {
          // console.log(data?.products?.items[0].sku)
            cartItem.cartItems.filter(item => item.sku==data?.products?.items[0].sku).length ===1 ? cartItem.cartItems.filter(item => item.sku==data?.products?.items[0].sku)[0].cartQuantity:'0'
            
          }
           
          <button onClick={()=> handleAdd(data?.products?.items[0])}>+</button>
        </div>
        <div className="add" onClick={() => handleAdd(data?.products?.items[0])}>
          <AddShoppingCartIcon/> ADD To CART
        </div>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD To Wish
          </div>
          <div className="item">
            <BalanceIcon/> ADD To Compare
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr/>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default VeniaProductPage

import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const images = ["https://venia.magento.com/media/catalog/product/v/t/vt11-ll_main.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  "https://venia.magento.com/media/catalog/product/v/t/vt11-ll_back.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"
]
  
const [mainimage,setMainImage] = useState(0);

 const [quantity,setQuantity] = useState(1);


  return (
    <>
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=""  onClick={()=> setMainImage(0)}/>
          <img src={images[1]} alt=""  onClick={()=> setMainImage(1)}/>
        </div>
        <div className="mainimg">
          <img src={images[mainimage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Titile</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione iste molestias, quas, id enim ex doloribus quia voluptas dolore, consequuntur deserunt voluptatem obcaecati exercitationem repellat consequatur nisi laboriosam veniam.</p>
        <div className="quantity">
          <button onClick={()=> setQuantity((prev) => (prev===1? 1 : prev-1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity(quantity => quantity+1)}>+</button>
        </div>
        <div className="add" onClick={() => handleAdd()}>
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

export default Product

import React from 'react'
import {Link} from "react-router-dom";
import './Cards.scss';


const Cards = ({ item }) => {
  const imgData =["https://burst.shopifycdn.com/photos/blue-and-white-bird-stands-outdoors-within-lush-trees.jpg?width=1850&format=pjpg&exif=0&iptc=0",
                  "https://burst.shopifycdn.com/photos/a-bird-in-flight-over-still-blue-water.jpg"];

  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className="image">
          <span>New Season</span>
          <img src={item.image} alt=""  className='mainimage'/>
          <img src={item.secondImg} alt="" className='secondimage'/>
      </div>
          <h2>{item.title}</h2>
      <div className="prices">
            <h3 className="oldprice">${item.oldPrice}</h3>
            <h3 className="newprice">${item.price}</h3>
      </div>
    </div>
    </Link>
    
  )
}

export default Cards

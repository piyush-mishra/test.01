import React from 'react'
import './Home.css';
const Home = (props) => {
    console.warn('home ', props.cardData);
    console.log(props.cardData.cartItem.length);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button className='add' onClick={() => props.addToCartHandler({price:100,item:"i-Phone"})}
                    >
                        Add To Cart</button>
                </div>
                <div className="btn-wrapper item">
                    <button className='remove' onClick={() => props.removeToCartHandler({price:100,item:"i-Phone"})}>
                        Remove</button>
                </div>
            </div>
    </div>
  )
}

export default Home

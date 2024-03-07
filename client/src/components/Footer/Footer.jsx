import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="top">
      <div className='item'>
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrival</span>
      </div>
      <div className='item'>
        <h1>Links</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrival</span>
      </div>
      <div className='item'>
        <h1>About</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores excepturi labore repudiandae impedit pariatur, quidem nobis voluptate eum laborum in beatae quas deleniti alias at vitae commodi recusandae veritatis aperiam?</span>
        </div>
      <div className='item'>
        <h1>Contact</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non expedita, vero velit corporis voluptate dolorem eligendi consectetur nesciunt cumque quasi aspernatur! At voluptatibus molestiae deserunt est maxime quas exercitationem?</span>
      </div>
      </div>
      <div className="bottom">
        <div className="left">
           <span className='logo'>AEM Store</span>
           <span className='copyright'>CopyRight </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
     </div>
    </>
  )
}

export default Footer

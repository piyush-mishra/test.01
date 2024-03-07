import React from 'react'
import Cards from '../Cards/Cards';

import './FeaturedProduct.scss';
import { DUMMY_DATA } from '../../dummyData/dummyData';

const FeaturedProduct = ({type}) => {


 


  return (
    <div className="featuredproduct">
        <div className="top">
             <h1>{type} Product</h1>
            <p>Lorem ipsum dolor sit, dita corrupti eos distinctio porro perferendis rem sit adipisci unde, ea fugiat culpa corporis suscipit iste dicta? Laborum ipsa expedita quae eaque.</p>
        </div>
        <div className="bottom">
            {DUMMY_DATA?.slice(0,4).map((item) => (item && 
             <Cards item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProduct

export const CARDS_DATA = [
  {
   id:1,
   title:'Hat',
   oldProdct:19,
   mainImg:'https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=',
   secondImg:'https://media.istockphoto.com/id/1303467039/photo/young-working-hard-to-satisfy-all-her-online-fashion-shop-customers.jpg?s=1024x1024&w=is&k=20&c=QtVN-1O3y0PJWzXDEGwOi4P9jAtofozdoIUPlEfHXMA=',
   price:12
 },
 {
  id:2,
  title:'Hat',
  oldProdct:1119,
  mainImg:'https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=',
   secondImg:'https://media.istockphoto.com/id/1303467039/photo/young-working-hard-to-satisfy-all-her-online-fashion-shop-customers.jpg?s=1024x1024&w=is&k=20&c=QtVN-1O3y0PJWzXDEGwOi4P9jAtofozdoIUPlEfHXMA=',
  price:5512
}, {
  id:3,
  title:'Hat',
  oldProdct:4319,
  mainImg:'https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=',
   secondImg:'https://media.istockphoto.com/id/1303467039/photo/young-working-hard-to-satisfy-all-her-online-fashion-shop-customers.jpg?s=1024x1024&w=is&k=20&c=QtVN-1O3y0PJWzXDEGwOi4P9jAtofozdoIUPlEfHXMA=',
  price:7512
},
{
  id:4,
  title:'Hat',
   mainImg:'https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=1024x1024&w=is&k=20&c=ZsW8UwqqUKZ0HbKD65_Byzvzu4QhfeaqsD9_ovXcWZ4=',
   secondImg:'https://media.istockphoto.com/id/1303467039/photo/young-working-hard-to-satisfy-all-her-online-fashion-shop-customers.jpg?s=1024x1024&w=is&k=20&c=QtVN-1O3y0PJWzXDEGwOi4P9jAtofozdoIUPlEfHXMA=',
  oldProdct:19,
  price:12
}

];
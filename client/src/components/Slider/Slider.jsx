import React, { useEffect, useState } from 'react'
import "./Slider.scss";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

function Slider() {


const [currentSlide, setCurrentSlide] = useState(0);

const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1);
};

const nextSlide = () => {
  setCurrentSlide(currentSlide===2 ? 0 : (prev) => prev +1 );
}


 const data = [
    "https://burst.shopifycdn.com/photos/business-pug-working-on-laptop.jpg?width=1850&format=pjpg&exif=0&iptc=0/stock-photos/@matthew_henry?utm_campaign=photo_credit&utm_content=High+Res+Business+Pug+Working+On+Laptop+Picture+%E2%80%94+Free+Images&utm_medium=referral&utm_source=credit",
    "https://burst.shopifycdn.com/photos/black-and-white-photo-of-a-cat-laying-in-the-pavement.jpg?width=1850&format=pjpg&exif=0&iptc=0",
    "https://burst.shopifycdn.com/photos/photo-of-a-desk-and-white-corner-seating-area.jpg?width=1850&format=pjpg&exif=0&iptc=0"
 ];

console.log(currentSlide);

  return (
    <div className="slider">
    <div className="container" style={{transform:`translateX(${currentSlide* -100}vw)`}}>
              <img src={data[0]} alt="" />
              <img src={data[1]} alt="" />
              <img src={data[2]} alt="" />
             
    </div>
    <div className="icons">
        <div className="icon" onClick={()=> prevSlide(currentSlide)}>
          <WestIcon/>
        </div>
        <div className="icon" onClick={() =>nextSlide(currentSlide)}>
           <EastIcon/>
        </div>
    </div>
    </div>
  )
}

export default Slider

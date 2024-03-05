import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Categories from '../../components/Categories/Categories'
const Home = () => {
  return (
    <>
     <div>Home</div>
     <Slider/>
     <FeaturedProduct type={`featured`}/>
     <Categories/>
     <FeaturedProduct type={`trending`}/>
    </>
  )
}

export default Home

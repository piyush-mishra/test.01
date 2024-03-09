import React from 'react'
import './Home.scss'
import Slider from '../../components/Slider/Slider'
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct'
import Categories from '../../components/Categories/Categories'
import Displaylocations from '../../components/Displaylocations'
const Home = () => {
  return (
    <>
     <Displaylocations/>
     <Slider/>
     <FeaturedProduct type={`featured`}/>
     <Categories/>
     <FeaturedProduct type={`trending`}/>
    </>
  )
}

export default Home

import React from 'react'
import './List.scss';
import  {CARDS_DATA}  from '../FeaturedProduct/FeaturedProduct';
import Cards from '../Cards/Cards';
import { DUMMY_DATA } from '../../dummyData/dummyData';
import VeniaProducts from '../VeniaProducts/VeniaProducts';
const List = () => {
  const data = DUMMY_DATA;
  return (
    <div className='list'>
        {/* {data?.map((item) => 
            <Cards item={item} key={item.id}/>
        )}; */}
        <VeniaProducts/>
    </div>
  )
}

export default List

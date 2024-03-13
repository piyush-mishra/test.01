import React, { useState } from 'react'
import './Category.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Category = () => {
  const catId = parseInt(useParams().id);
  const[maxPrice, setMaxPrice] = useState(1000);
  const[sort,setSort]=useState(null);
  return (
    <>
       <div className="category">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="intputItem">
            <input type="checkbox" name="1" id="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="intputItem">
            <input type="checkbox" name="1" id="1" />
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="intputItem">
            <input type="checkbox" name="1" id="1" />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="intputItem">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc"  onClick={()=>setSort("asc")}/>
            <label htmlFor="">Price (High First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc"  onClick={()=>setSort("desc")}/>
            <label htmlFor="">Price (High First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
    </>
  )
}

export default Category

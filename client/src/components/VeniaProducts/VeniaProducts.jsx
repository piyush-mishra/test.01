import React from 'react'
import { Product_List } from '../../queries/useProductListQuery'
import { useQuery } from '@apollo/client';

function VeniaProducts() {

  const { loading, error, data} = useQuery(Product_List);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // console.log(data);


  return (
    <div className='card'>
        {data?.products?.items.map(({sku,url_key,name,small_image,price_range}) => (
          <a href={url_key} key={sku}>
          <div className="image">
            <img src={small_image.url} />
          </div>
              <h2>{name}</h2>
          <div className="prices">
          <h3 className="oldprice">${price_range.minimum_price.regular_price.value}</h3>
            <h3 className="newprice">${price_range.minimum_price.final_price.value}</h3>
          </div>
        </a>
          ))}
      </div>
  )
}

export default VeniaProducts;
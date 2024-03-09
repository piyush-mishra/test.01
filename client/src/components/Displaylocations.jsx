import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

export default function Displaylocations() {

const GET_LOCATIONS = gql`
 query Products {
    products(filter: { sku: { eq: "VT11" } }) {
        items {
            sku
            uid
            name
            url_key
            image {
                url
            }
        }
    }    
}

`;



const { loading, error, data} = useQuery(GET_LOCATIONS);



if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  //console.log(data);
  return (
    <div>
        Displaylocations
        {data?.products?.items?.map(({name,uid}) => (
            <h2>{name}</h2>

        )
        )}
    </div>
    
  )
}

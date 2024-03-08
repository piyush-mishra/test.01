import React from 'react'
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

const { loading, error, data } = useQuery(GET_LOCATIONS);
if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
        Displaylocations
        {data.locations.map(({id,name,photo}) => 
            <div key={id}>
                <h3>{name}</h3>
                <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            </div>
        )}
    </div>
    
  )
}

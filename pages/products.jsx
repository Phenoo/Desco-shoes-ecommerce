import React from 'react'

import { Product } from "../components";
import {client} from '../lib/client'

const products = ({products}) => {
  return (
    <section>
        <div className='products-heading'>
        <h2>Products</h2>
        <p>Shoes of many variations</p>
      </div>
      <div className="stocks-container">
        {
          products?.map(
            (product) => <Product key={product.id} product={product} />
          )
        }
      </div>
    </section>
  )
}




export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);


  return{
    props: {products}
  }
}
export default products



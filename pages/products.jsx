import React from 'react'

import { Product } from "../components";
import {client} from '../lib/client'

const Products = ({products}) => {
  return (
    <div className='products'>
        <div className='hero-heading'>
        <h2>shop shoes</h2>
      </div>
    <section>
      <div className="products-container">
        {
          products?.map(
            (product) => <Product key={product._id} product={product} />
          )
        }
      </div>
    </section>
    </div>

  )
}




export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);


  return{
    props: {products}
  }
}
export default Products



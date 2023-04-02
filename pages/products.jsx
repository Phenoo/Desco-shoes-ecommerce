import React from 'react'

import { Product } from "../components";
import {client} from '../lib/client'

const Products = ({products}) => {
  return (
    <div className='products'>

    <section>
        <div className='heading'>
        <h2>Our Products</h2>
      </div>
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



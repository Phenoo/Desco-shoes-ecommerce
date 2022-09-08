import React from 'react'
import {client} from '../lib/client'
import { Product } from '../components';
import Link from 'next/link';
import Brands from '../components/Brands';
import HomeContainer from '../components/HomeContainer';
import About from '../components/About';


const Home = ({products, bannerData}) => {
  const filterItems = products?.filter((item, index) => index < 9);

  return (
    <>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <HomeContainer />
      <Brands /> 
      <div className='products-heading'>
        <h2 className='tophead'>Best Selling Products</h2>
        <p>meet our great selection of finest shoes</p>
      </div>
      <section className='container'>
        <div className='stocks-container'>
          {
            filterItems?.map(
              (product) => <Product key={product.id} product={product} />
            )
          }
        </div>
        <Link href='/products'>
            <button  className='see-more'>
              see more
            </button>
        </Link>
      </section>
      <About />
    

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  
  return{
    props: {products, bannerData}
  }
}
export default Home


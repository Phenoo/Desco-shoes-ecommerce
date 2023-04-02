import React from 'react'
import {client} from '../lib/client'
import { Product } from '../components';
import Link from 'next/link';
import HomeContainer from '../components/HomeContainer';
import Offer from '../components/Offer';
import Featured from '../components/Featured/Featured';
import Review from '../components/Review';
import Overflow from '../components/Overflow';


const Home = ({products}) => {

  return (
    <>
      <HomeContainer />
      {
        products && <Featured products={products} />
      }
      <Offer />
      <Review />
      <Overflow />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);


  return{
    props: {products}
  }
}
export default Home


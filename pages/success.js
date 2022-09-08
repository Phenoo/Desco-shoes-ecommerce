import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
// import {runFireworks} from '../lib/utlis'

import {useStateContext} from '../context/StateContext'

const Success = () => {
  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect((() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0)
    setTotalQuantities(0);
    // runFireworks();
  }))
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>
          Thank you for patronizing
        </h2>
        <p className="email-msg">
          check your email inbox for the receipt.
        </p>
        <p className="description">
          if you have any issues, please contact 
          <a href="mailto:descometusah@gmail.com" className='email'>descoshoes@gmail.com</a>
        </p>
        <Link href='/'>
          <button className='see-more'>
            continue shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';

import Cart  from './Cart';
import Logo from './Logo/Logo';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <section>
      <div className="navbar-container">
        <div>
          <Logo />
        </div>
        <div>
          <ul>
            <li>
              <Link href="/products">
                shop
              </Link>
            </li>
            <li>
              <Link href="/">
                search
              </Link>
            </li>
            <li>
              <Link href="/">
                contact
              </Link>
            </li>
            <li>
              <Link href='/cart'>
                cart
                {/* {totalQuantities} */}
              </Link>
            </li>
          </ul>
        </div>


        {showCart && <Cart />}
      </div>
      <div className="divider"></div>
    </section>
  )
}

export default Navbar
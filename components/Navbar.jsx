import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';

import Cart  from './Cart';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <section>
      <div className="navbar-container">
        <Link href="/">
          <div className="logo">
            <h3>desco</h3>
          </div>
        </Link>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </section>
  )
}

export default Navbar
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext} from '../context/StateContext';

import Cart  from './Cart';
import Logo from './Logo/Logo';
import SearchContainer from './SearchContainer';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  const {  totalQuantities, search, setSearch } = useStateContext();

  const cart = ` cart  ${totalQuantities}`

  return (
    <section>
      <div className="navbar-container">
        <div>
          <Logo />
        </div>
        <div className='nav-list'>
          <ul>
            <li>
              <Link href="/products">
                shop
              </Link>
            </li>
            <li>
             <button onClick={() => setSearch(true)}>
              search
             </button>
            </li>
            <li>
              <Link href="/about">
                about us
              </Link>
            </li>
            <li>
              <Link href='/cart'>
                {cart}
              </Link>
            </li>
          </ul>
        </div>
        <div className='none'>
          <button>
            <FaBars />
          </button>
        </div>


      </div>
      <div className="divider"></div>
      {
        search && <SearchContainer
          setSearch={setSearch}
          search={search}
        />
      }
    </section>
  )
}

export default Navbar
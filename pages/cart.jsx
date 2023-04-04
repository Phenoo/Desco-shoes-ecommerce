import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setCartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  
  useEffect(() => {
    if (localStorage.getItem('cartItems')) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    }
  }, []);


  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    console.log(data)

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-page">
      <div className="hero-heading">
        <h2>
          cart page
        </h2>
      </div>
      <section>
        <div className="cart-wrapper" ref={cartRef}>
          <div className="cart-container">
            <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}>
              <AiOutlineLeft />
              <span className="heading">Your Cart</span>
              <span className="cart-num-items">({totalQuantities} items)</span>
            </button>

            {cartItems.length < 1 && (
              <div className="empty-cart">
                <AiOutlineShopping size={150} />
                <h3>Your shopping bag is empty</h3>
                <Link href="/">
                  <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    className="btn"
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}

            <div className="product-container">
              {cartItems.length >= 1 && cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <div className="cart-product-image">
                  <img src={urlFor(item?.image[0])} />
                  </div>
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                        <AiOutlineMinus />
                        </span>
                        <span className="num" onClick="">{item.quantity}</span>
                        <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                      </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length >= 1 && (
              <div className="cart-bottom">
                <div className="total">
                  <h3>Subtotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className="btn-container">
                  <button type="button" className="btn" onClick={handleCheckout}>
                    Pay with Stripe
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
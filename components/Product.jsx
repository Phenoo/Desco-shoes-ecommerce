import React, { useState } from 'react';
import Link from 'next/link';
import {  AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'


import { urlFor } from '../lib/client';

import { toast } from 'react-hot-toast';

import {useStateContext} from '../context/StateContext'

const Product = ({ product: { image, name, slug, price }, product }) => {
  const [like, setLike] = useState(true);
  const {qty, onAdd} = useStateContext();


  const handleLike = () => {
    if(!like){
      setLike(true)
      toast.error(`unadded from favorites`);
    }
    else if(like){
      setLike(false)
      toast.success(`added to favorites`);
    }
  }
  
  return (
        <div className="stock">
          <span className="instock">
              in stock
          </span>
          <Link href={`/product/${slug.current}`}>
            <div className="stock-image">
              <img 
                src={urlFor(image && image[0])}
              />
            </div>
          </Link>
          <div className="divider" />
          <div className="stock-text">
            <div className="space-between">
              <h4 className="name">{name}</h4>
              <p className="price">${price}</p>
            </div>
            <h6>
              Size: L
            </h6>
          <div className="divider" />
            <div className="space-between">
              <div className="stock-svg buy" onClick={() => onAdd(product, qty)}>
                <button>
                  buy now
                </button>
              </div>
              <div className="stock-svg ">
                <button className='plus' onClick={handleLike}>
                  <span>
                    {like ?  <AiOutlineHeart /> : <FaHeart /> }
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Product
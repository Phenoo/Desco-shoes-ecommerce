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
    <div>
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
          <div className="stock-text">
            <h6 className="name">{name}</h6>
            <p className="price">${price}</p>
            <div className="stock-footer">
              <div className="stock-svg buy" onClick={() => onAdd(product, qty)}>
                <AiOutlineShoppingCart />
              </div>
              <div className="stock-svg">
                <span onClick={handleLike}>
                  {like ?  <AiOutlineHeart /> : <FaHeart /> }
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product
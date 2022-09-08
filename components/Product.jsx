import React, { useState } from 'react';
import Link from 'next/link';
import {  AiOutlineHeart } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'


import { urlFor } from '../lib/client';

import { toast } from 'react-hot-toast';


const Product = ({ product: { image, name, slug, price } }) => {
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like);
    toast.success(`added to the favorites`);
  }
  
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="stock">
          <span className="instock">
              in stock
          </span>
          <div className="stock-image">
            <img 
              src={urlFor(image && image[0])}
            />
          </div>
          <div className="stock-text">
            <h6 className="name">{name}</h6>
            <div className="stock-footer">
              <p className="price">${price}</p>
              <div className="stock-svg">
                <span onClick={handleLike}>
                  {like ? <FaHeart /> : <AiOutlineHeart /> }
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
import React, { useState } from 'react';
import Link from 'next/link';
import {  AiOutlineHeart } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'


import { urlFor } from '../lib/client';

import { toast } from 'react-hot-toast';


const Product = ({ product: { image, name, slug, price } }) => {
  const [like, setLike] = useState(true)

  const handleLike = () => {
    if(!like){
      setLike(true)
      toast.error(`unadded to the favorites`);
    }
    else if(like){
      setLike(false)
      toast.success(`added to the favorites`);
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
            <div className="stock-footer">
              <p className="price">${price}</p>
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
import React from 'react';
import Link from 'next/link';
import {  AiOutlineHeart } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'


import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  
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
                <span>
                  <AiOutlineHeart />
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
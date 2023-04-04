import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const {image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const {decQty, incQty, qty, onAdd, onAddValue, svalue, setSvalue} = useStateContext();

  return (
    <div className='slug-page'>
      <div className='hero-heading'>
        <h2 className=''>{name}</h2>
      </div>

    <section>

      <div className="product-detail-container">
        <div className='product=detail-image'>
          <div className="main-image-container">
            <img src={urlFor(image && image[index])} className='product-detail-image' />
          </div>
          <div className="small-images-container">
            {
              image?.map((item, i) => (
                <img
                  src={urlFor(item)}
                  key={i}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))
            }
          </div>
        </div>
        <div className="product-detail-desc">
          <div className='space-between'>
            <h4 className='tophead'>
              {name}
            </h4>
            <h4>${price}</h4>
          </div>
          {/* <h4>Details: </h4> */}
            <br />
            <div className="reviews">
              <div>
                <AiFillStar color='orange' />
                <AiFillStar color='orange' />
                <AiFillStar color='orange' />
                <AiFillStar color='orange' />
                <AiFillStar color='gray' />
              </div>
              <p>(20)</p>
            </div>
            <h3>Description: </h3>
            <p>{details}</p>
            <p className="price">${price}</p>
            <div className="quantity">
              <h3>Quantity: </h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                    <AiOutlineMinus />
                </span>
                <span className="number">
                    {qty}
                </span>
                <span className="plus" onClick={incQty}>
                    <AiOutlinePlus />
                </span>
              </p>
            </div>
          <div className="buttons">
            <button type="button" className="button" onClick={() =>{
               onAdd(product, qty)
            }}>
                Add to Cart
              </button>
          </div>
          </div>
      </div>
    </section>
    </div>

  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { products, product }
  }
}

export default ProductDetails
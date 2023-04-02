import React from 'react'
import Product from '../Product';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

const Featured = ({products}) => {
  const filterItems = products?.filter((item, index) => index < 6);

  return (
    <div className='featured'>
        <section>

        <div className='featured-heading'>
            <h2 className='tophead'>Best Shoes from variety of collection</h2>
        </div>

          { filterItems && <div className='stocks-container'>
    
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={40}
                modules={[Pagination]}
                className="mySwiper"
                >
            {
                filterItems?.map(
                  (product) => <SwiperSlide>
                        <Product key={product._id} product={product} />
                    </SwiperSlide>
                )
              }

            </Swiper>

            <Link href='/products'>
                <button  className='btn-primary'>
                  explore more
                  <span>
                  &#x2197;
                  </span>
                </button>
            </Link>
            
          </div>
}
        </section>
    </div>
  )
}

export default Featured
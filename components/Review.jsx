import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';


const Review = () => {
  return (
    <div className='review'>
        <section>
            <h4 className="tophead">
                Our services at glance
            </h4>
            <p>Buy the best quality shoes from alll kinds of brand</p>

            <div className='review-container'>

            <Swiper
            slidesPerView={"auto"}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="reSwiper"
          >


            {
              [1, 2, 3, 4].map((item, index) => (
                <SwiperSlide key={index} className='swiperslide'>
                  <div className="review-card" key={index}>
                    <div className="head">
                        <div className="circle" />
                        <div>
                            <h6>John Doe</h6>
                            <p>Instructor</p>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi maiores incidunt accusamus ipsum architecto illum eius, dolore soluta omnis et.
                    </p>
                  </div>
                </SwiperSlide>
              ))
            }    
          </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Review
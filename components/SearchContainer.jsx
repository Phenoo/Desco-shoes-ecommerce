import React, { useEffect, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Autoplay, Navigation, Pagination } from 'swiper';

import SearchItem from './SearchItem';
import { useStateContext } from '../context/StateContext';
import { client } from '../lib/client';


const SearchContainer = () => {
    const [posts, setPosts] = useState()
    const { setSearch, search } = useStateContext()
    const [searchValue, setSearchValue] = useState('');

    const fetchData = async () => {
        const query = '*[_type == "product"]';
        const post = await client.fetch(query);
        setPosts(post)
    }

    const filterItems = posts?.filter(product => product.name.includes(searchValue.toLowerCase()))


    useEffect(() => {
        fetchData();
      }, [])

  return (
    <div className='search-modal'>
        <div>
            <section>

            <button onClick={() => setSearch(!search)}>
                <FaTimes color='white' size={30} />
            </button>
            </section>

        </div>

        <div className="search-container">
            <section>

            <div className="form-input">
                <FaSearch />
                <input 
                    type="text" 
                    name="search" 
                    placeholder='Search...' 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <div className="search-products">
                <h4 className='tophead'>Featured Products</h4>
                <br />
                <div className='search-products-container'>
                    {
                        filterItems?.length === 0 && 
                        <div className='nothing'>
                            <h4>Loading...</h4>
                        </div>
                    }
                    {
                                <Swiper
                                    slidesPerView={"auto"}
                                    spaceBetween={20}
                                    autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    }}
                                    modules={[ Autoplay, Navigation, Pagination ]}
                                    className="seSwiper"
                                    >

                                {
                                    filterItems?.map(
                                    (product, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            
                                          <SearchItem product={product} key={index} />
                                        </SwiperSlide>

                                    )
                                    
                                        }
                                    )
                                }                    
                            </Swiper>
                    }
                   
                  
                </div>
            </div>
            </section>

        </div>
    </div>
  )
}

export default SearchContainer
import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';

const SearchItem = ({product}) => {
    const { search, setSearch} = useStateContext()
    const { image, name, slug, price } = product;
  return (
    <article className='search-item' onClick={() => setSearch(!search)}>
        <Link href={`/product/${slug.current}`}>
            <div className="image">
            <img 
                src={urlFor(image && image[0])}
                width={110}
                height={150}
                layout="fill"
                object-fit="cover"
            />
            </div>
        </Link>
        <h4>
            {name}
        </h4>
    </article>
  )
}

export default SearchItem
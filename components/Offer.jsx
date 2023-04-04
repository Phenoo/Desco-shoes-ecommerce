import Image from 'next/image'
import React, { useState } from 'react'

import {  MdOutlineAutoMode  } from 'react-icons/md'

import { FaAward} from 'react-icons/fa'
import { AiOutlineGlobal, AiOutlineMoneyCollect, AiOutlineUserDelete} from 'react-icons/ai'

const courseItems = [
  {
    id: 1,
    name: 'Live Classes',
    class: 'orange',
    image: <FaAward /> 
  }, 
  {
    id: 2,
    name: 'Live Classes',
    class: 'orange',
    image: <AiOutlineGlobal /> 
  },
  {
    id: 3,
    name: 'Recorded Classes ',
    class: 'purple',
    image: <AiOutlineMoneyCollect />
  },
  {
    id: 4,
    name: '50+ Notes',
    class: 'blue',
    image: <AiOutlineUserDelete />
  },
]

const Offer = () => {
  const [data, setData] = useState(courseItems)
  return (
    <div className='offer'>
      <section>
      <div className="grid-offer">
        <div className='offer-image'>
          <Image src='https://source.unsplash.com/PqbL_mxmaUE' width={350} height={450} alt='shoes'/>
        </div>
        <div className="offer-text">
          <h4 className="tophead">
            shoes last forever
          </h4>
          <div className="offer-container">
            {
              data.map((item, index) => (
                <article key={index}>
                  <span>
                    {item.image}
                  </span>
                  <h4>
                    {item.name}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, laudantium incidunt unde beatae nisi cupiditate.
                  </p>
                </article>
              ))
            }
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Offer
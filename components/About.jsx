import React from 'react'

import Aboutimg from '../public/assets/aboutimg.jpeg'
import Image from 'next/image'

const About = () => {
  return (
    <section className="about">
      <div className='about-container'>
        <div className="about-text">
          <h4 className='tophead'>why alton</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis es
            t eum sed, illum quae possimus inventore voluptatem quia quis corporillum quae possimus inventore voluptatem quia quis corpori
            llum quae possimus inventore voluptatem quia quis corporillum quae possimus inventore voluptatem quia quis corpori
            s!
          </p>
        </div>
        <div className="about-img">
          <Image src={Aboutimg} alt='about'/>
        </div>
      </div>
    </section>
  )
}

export default About
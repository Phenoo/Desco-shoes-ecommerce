import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeContainer = () => {
  return (
    <div className="home">

      <section>
        <div className="home-container">

          <div className="home-text">
            <h2>
              clito'n fit shoes
            </h2>

            <h4>Style goes with your personality</h4>
            <Link href='/products'>
              <button className="button">buy now</button>
            </Link>
        </div>
        <div className='home-image'>
          <Image src="https://source.unsplash.com/JzJSybPFb3s" 
            width={500}
            height={250}
            className='image'
            alt='home' />
          <div className="star">
            50%
          </div>
        </div>
    </div>
      </section>
    <div className="overlay"></div>

    </div>

  )
}

export default HomeContainer
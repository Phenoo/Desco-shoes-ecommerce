import Link from 'next/link'
import React from 'react'

const HomeContainer = () => {
  return (
    <section className="home-container">
        <div className="home-text">
          <h6>sports</h6>
          <h4>Easy and reliable purchase</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quae quisquam. Illum dolorum tenetur blanditiis est quisquam expedita iusto saepe!</p>
          <Link href='/products'>
            <button className="see-more">shop now</button>
          </Link>
      </div>
    </section>
  )
}

export default HomeContainer
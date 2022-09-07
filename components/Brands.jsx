import React from 'react'

import {SiAdidas, SiPuma, SiNike, SiNewbalance, SiJordan} from 'react-icons/si'

const Brands = () => {
  return (
    <section className="brands">
      <div className="brand">
        <SiAdidas />
        <h6>Adidas</h6>
      </div>
      <div className="brand">
        <SiPuma />
        <h6>Puma</h6>
      </div>
      <div className="brand">
        <SiNike />
        <h6>Nike</h6>
      </div>
      <div className="brand">
        <SiNewbalance />
        <h6>New balance</h6>
      </div>
      <div className="brand">
        <SiJordan />
        <h6>Jordan</h6>
      </div>
    </section>
  )
}

export default Brands
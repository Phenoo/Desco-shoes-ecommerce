import React, { useRef, useState } from 'react'

import Image from 'next/image'

import Shoe from '../public/assets/shoetrans.png'
import ModalComponent from './ModalComponent'


const Subscribe = () => {
  const [modal, setModal] = useState(false);

  const emailRef = useRef(null);

  const handleModal = (e) => {
    e.preventDefault();
    setModal(!modal)
  }
  return (
    <div className="subscribe">

    <section>
          <div className="contact-section">
        {
          modal && <ModalComponent handleModal={handleModal}  />
        }
      <div className="contact-header">
          <div className="contact-text">
            <section>

            <h4 className='tophead'>Subscribe to our news articles</h4>
            <br />
            <form action="" onSubmit={handleModal}>
              <div className="form-input">
                <input type="email" name="" id="" placeholder='Your email address' ref={emailRef} required />
                <button type="submit" className='btn-primary'>subscribe <span> &#x2197; </span></button>
              </div>
            </form>
            </section>
          </div>
          <div className="contact-image">
            <Image src={Shoe}
              alt="contact"
              height={300}
            />
          </div>
        </div>
    </div>
    </section>
    </div>

  )
}

export default Subscribe
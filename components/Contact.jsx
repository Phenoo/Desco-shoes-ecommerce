import React, { useRef, useState } from 'react'
import { AiOutlineMail} from 'react-icons/ai'

import Image from 'next/image'

import Shoe from '../public/assets/bg6.jpeg'
import ModalComponent from './ModalComponent'


const Contact = () => {
  const [modal, setModal] = useState(false);

  const emailRef = useRef(null);

  const handleModal = (e) => {
    e.preventDefault();
    setModal(!modal)
  }
  return (
    <div className="contact-section">
        {
          modal && <ModalComponent handleModal={handleModal}  />
        }
      <section>
      <div className="contact-header">
          <div className="contact-container">
            <h4>$20 Discount for your first order</h4>
            <h6>Join our newsletter and get updates</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pr
              aesentium odio rem quaerat autem aperiam fugit suscipit! Unde dolorem et</p>

            <form action="" onSubmit={handleModal}>
              <div className="form-input">
                <div>
                  <AiOutlineMail />
                  <input type="email" name="" id="" placeholder='Your email address' ref={emailRef} required />
                </div>
                <button type="submit" className='see-more'>subscribe</button>
              </div>
            </form>
          </div>
          <div className="contact-image">
            <Image src={Shoe}
              alt="contact"
              className='image'
              height={200}
              width={200}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
import React, { useRef, useState } from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import { SiApple, SiGoogleplay } from 'react-icons/si'
import Image from 'next/image'

import Shoe from '../public/assets/bg6.jpeg'
import ModalComponent from './ModalComponent'


const Footer = () => {
  const [modal, setModal] = useState(false);

  const emailRef = useRef(null);

  const handleModal = (e) => {
    e.preventDefault();
    setModal(!modal)
  }
  return (
    <footer>
        {
          modal && <ModalComponent handleModal={handleModal}  />
        }
      <section className="footer">
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
              height={350}
              width={350}
            />
          </div>
        </div>
        <div className="main-footer">
          <div className="footer-container">
            <div>
              <div className="logo">
                <h3>desco</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate impedit reiciendis minus commodi suscipit officia culpa recusandae iste ex at
              </p>
            </div>
            <div className="foot">
              <h4>quick link</h4>
              <ul>
                <li>
                  <a href="#collection">collection</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#shop">shop</a>
                </li>
              </ul>
            </div>
            <div className="foot">
              <h4>support</h4>
              <ul>
                <li>
                  <a href="#termsconditions">terms & conditions</a>
                </li>
                <li>
                  <a href="#help">help</a>
                </li>
                <li>
                  <a href="#faq">faq</a>
                </li>
              </ul>
            </div>
            <div className="foot contact">
              <h4>contact</h4>
              <h6>descometusah@gmail.com</h6>
              <h6>0703 - 517 - 2208</h6>
              <div className="social">
                <div className="svg">
                  <FaFacebook />
                </div>
                <div className="svg">
                  <AiOutlineInstagram />
                </div>
                <div className="svg">
                  <AiOutlineGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>&copy; Desco 2022</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
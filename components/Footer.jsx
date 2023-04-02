import React, { useRef, useState } from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import Logo from './Logo/Logo'

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="main-footer">
        <div>
             <Logo />
              <p>
                Style comes with personality here.
              </p>
              <div className="form-input">
                <input type="email" name="" id="" placeholder='Get 29% off on first order' required />
                <button type="submit" className='btn-primary'>order now <span> &#x2197; </span></button>
              </div>
            </div>
          <div className="footer-container">
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
              <br />
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
        <div className="divider"></div>
        <div className="copy">
          <p>&copy; Desco 2022</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
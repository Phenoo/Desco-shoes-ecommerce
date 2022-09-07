import Image from 'next/image'
import React from 'react'
import Verify from '../public/assets/verify.png'

const ModalComponent = ({handleModal}) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="content">
            <Image src={Verify} alt="approve" width={50} height={50} />
            <h4>Subscription Complete</h4>
            <p>you have subscribed to our newsletter</p>
            <button className="ok" onClick={handleModal}>
                ok
              </button>
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent
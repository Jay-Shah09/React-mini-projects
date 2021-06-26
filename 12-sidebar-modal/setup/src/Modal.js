import React,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import {HelloWorld} from './context'

const Modal = () => {
  const {isModal,hideModal} = useContext(HelloWorld);
  return (
<div className={isModal?"modal-overlay show-modal":"modal-overlay"}>
      <div className="modal-container">
        <h2>modal content</h2>
        <button className="close-modal-btn" onClick={()=>hideModal()}><FaTimes/></button>
      </div>
    </div>
  )
}

export default Modal
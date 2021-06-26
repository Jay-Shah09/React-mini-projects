import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {HelloWorld} from './context'

const Home = () => {
  const {showSidebar,showModal} = useContext(HelloWorld);

  return (
    <main>
      <button className="sidebar-toggle" onClick={()=>showSidebar()}><FaBars/></button>
      <button className="btn" onClick={()=>showModal()}>show modal</button>
    </main>
  ) 
}

export default Home

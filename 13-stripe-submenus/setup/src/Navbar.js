import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const {showSidebar,showSubMenu,hideSubMenu} = useGlobalContext();

  const handleSubMenu = (e) => {
    const name = e.target.textContent;
    const btnDimensions = e.target.getBoundingClientRect();
    const center = (btnDimensions.left + btnDimensions.right)/2;
    const bottom = btnDimensions.bottom+10;
    showSubMenu(name,{center,bottom});
  }
  const handleHideSubMenu = (e) => {
    if(!e.target.classList.contains("nav-btns")){
      hideSubMenu();
    }
  }
  return (
    <nav>
      <div className="navbar" onMouseOver={handleHideSubMenu}>
        <div className="nav-header">
          <img src={logo} alt="stripe" className="logo"/>
          <div className="toggle-btn">
            <button onClick={showSidebar}><FaBars/></button>
          </div>
        </div>
        <ul className="nav-btns-container">
          <li><button className="nav-btns" onMouseOver={handleSubMenu}>products</button></li>
          <li><button className="nav-btns" onMouseOver={handleSubMenu}>developers</button></li>
          <li><button className="nav-btns" onMouseOver={handleSubMenu}>company</button></li>
        </ul>
        <button className="signin-btn">signin</button>
      </div>
    </nav>
  )
}

export default Navbar

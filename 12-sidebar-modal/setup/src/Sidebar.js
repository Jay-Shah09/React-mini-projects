import React,{useContext} from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { HelloWorld } from './context'

const Sidebar = () => {
  const {isSidebar,hideSidebar} = useContext(HelloWorld);

  return (
    <aside className={`${isSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict"/>
        <button className="close-btn" onClick={()=>hideSidebar()}><FaTimes/></button>
      </div>
      <ul className="links">
        {
          links.map((link)=>{
            const {id,url,text,icon} = link;
            return (
              <li key={id}><a href={url}>{icon}{text}</a></li>
            );
          })
        }
      </ul>
      <ul className="social-icons">
        {
          social.map((singleIcon)=>{
            const {id,url,icon} = singleIcon;
            return (
              <li key={id}><a href={url}>{icon}</a></li>
            );
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar

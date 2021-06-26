import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false);
  const divContainer = useRef(null);
  const linksContainer = useRef(null);

useEffect(()=>{
  if(showLinks){
    const linksHeight = linksContainer.current.getBoundingClientRect().height;
    divContainer.current.style.height = `${linksHeight}px`;
  }  
  else{
    divContainer.current.style.height = `0px`;
  }
}, [showLinks]);


  return (
    <nav>
      <div className="nav-center">

        <div className="nav-header">
          <img src={logo} alt="logo"/>
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}><FaBars/></button>
        </div>
       
          <div ref={divContainer} className={`links-container ${showLinks && "show-container"}`}>
            <ul ref={linksContainer} className="links">
              {/* <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
              <li><a href="#">projects</a></li> */}
              {
                links.map((link)=>{
                  const {id,url,text} = link;
                  return (
                    <li key={id}><a href={url}>{text}</a></li>
                  );
                })
              }
            </ul>
        </div>

        <ul className="social-icons">
          {/* <li><a href="https:/www.twitter.com"><FaTwitter/></a></li>
          <li><a href="https:/www.twitter.com"><FaTwitter/></a></li>
          <li><a href="https:/www.twitter.com"><FaTwitter/></a></li>
          <li><a href="https:/www.twitter.com"><FaTwitter/></a></li> */}
          {
            social.map((singleIcon)=>{
              const {id,url,icon} = singleIcon;
              return (
                <li key={id}><a href={url}>{icon}</a></li>
              );
            })
          }
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

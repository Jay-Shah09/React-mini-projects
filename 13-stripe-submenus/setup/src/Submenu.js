import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
  const {isSubMenu,menuContent,location} = useGlobalContext();
  const {page,links} = menuContent;
  const [columns,setColumns] = useState("");

  const subMenuLocation = useRef(null);
  useEffect(()=>{
    subMenuLocation.current.style.left = `${location.center}px`;
    subMenuLocation.current.style.top = `${location.bottom}px`;

    if(links.length == 2){
      setColumns("col-2");
    }
    if(links.length === 3){
      setColumns("col-3");
    }
    if(links.length > 3){
      setColumns("col-4");
    }
  }, [location,links])

  return (
    <div ref={subMenuLocation} className={isSubMenu?"submenu show-submenu":"submenu"} >
      <h4>{page}</h4>
      <ul className={`submenu-links-container ${columns}`}>
        {
          links.map((link,index)=>{
            const {label,icon,url} = link;
            return (
            <li key={index}><a href={url}>{icon}{label}</a></li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default Submenu

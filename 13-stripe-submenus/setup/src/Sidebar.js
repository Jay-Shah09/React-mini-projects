import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

const Sidebar = () => {
  const {isSidebar,hideSidebar} = useGlobalContext();
  return (
    <aside>
      <div className={isSidebar?"sidebar-bg show-sidebar":"sidebar-bg"}>
        <div className="sidebar">
          <button className="sidebar-close-btn" onClick={hideSidebar}><FaTimes/></button>
          <div className="sidebar-links">
            {
              sublinks.map((sublink,index)=>{
                const {page,links} = sublink;
                return (
                  <article key={index}>
                    <h3>{page}</h3>
                    <ul>
                      {
                        links.map((link,index)=>{
                          const {label,icon,url} = link;
                          return (
                          <li key={index}><a href={url}>{icon} {label}</a></li>
                          )
                        })
                      }
                    </ul>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

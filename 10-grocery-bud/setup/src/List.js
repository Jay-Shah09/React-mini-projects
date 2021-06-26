import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = (props) => {
  const {list,removeItem,editItem} = props;
  return (
    <article className="grocery-list">
      {
          list.map((item)=>{
          const {id,itemName} = item;
          return (
            <div key={id} className="grocery-item">
              <p className="title">{itemName}</p>
              <div className="btn-container">
                <button className="edit-btn" onClick={()=>editItem(id,itemName)}><FaEdit/></button>
                <button className="delete-btn" onClick={()=>removeItem(id)}><FaTrash/></button>
              </div>
            </div>
          );
        })
      }
    </article>
  )
}

export default List

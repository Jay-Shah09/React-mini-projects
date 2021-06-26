import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaFontAwesomeLogoFull } from 'react-icons/fa';

function App() {
  const getLocalStorage = () => {
    const finalList = localStorage.getItem("Cart");
    if(finalList){
      return JSON.parse(localStorage.getItem("Cart"));
    }
    else{
      return [];
    }

  }

  const [itemName,setItemName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:'',type:''});
  const [isEditing,setIsEditing] = useState(false);
  const [editId,setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(itemName===""){
      alertSetting(true,"please enter the item","danger");
    }
    else if(isEditing){
      alertSetting(true,"item edited","success");

      setList(list.map((item)=>{
        if(item.id===editId){
          return {...item,itemName:itemName};
        }
        return item;
      }));
      setIsEditing(false);
    }
    else{
      alertSetting(true,"item added","success");

      const newItem = {id:new Date().getTime().toString(),itemName:itemName};
      setList([...list,newItem]);
    }
    setItemName("");
  }

  const removeAll = () => {
    alertSetting(true,"all items deleted","danger");
    setList([]);
    setItemName("");
  }
  const removeItem = (id) => {
    alertSetting(true,"item deleted","danger");
    setList(list.filter((item)=>item.id!==id));
  }
  const editItem = (id,itemName) => {
    setIsEditing(true);
    setItemName(itemName);
    setEditId(id);
  }
  const alertSetting = (show,msg,type) => {
    setAlert({show:show,msg:msg,type:type});
    // We can set setTimeout stuff in useEffect as every time alert changes in alert.js that means it renders so we can set useEffect in alert.js and in it we can set setTimeout and in it we can do alertSetting({show:false,msg:'',type:''}) for this at first we have to send alertSetting from <Alert/> to alert.js. Also we have to put list in the dependency array of useEffect because reason in 4:28:50 in video.
  }

  useEffect(()=>{
    localStorage.setItem("Cart",JSON.stringify(list));
  }, [list]);

  return (
    <main>
      <section className="section-center">
    
        <div className="grocery-form">
          {alert.show && <Alert {...alert} alertSetting={alertSetting} list={list}/>}
          <h3 >grocery bud</h3>
      
          <form className="form-control" onSubmit={handleSubmit}>
            <input className="grocery" placeholder="e.g. eggs" type="text" id="item" name="item" value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
            <button className="submit-btn">{isEditing ? "edit" : "add"}</button>
          </form>
        </div>

        {list.length > 0 && (
          <div className="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={removeAll}>clear all items</button>
        </div>
        )}
        

      </section>
    </main>
  )
}

export default App

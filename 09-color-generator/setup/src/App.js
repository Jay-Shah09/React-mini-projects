import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState("");
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);
  // const [list,setList] = useState(new Values("#f15025").all(10)) ---> It is used to set the shades of color initially(on refreshing).

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try{
      setError(false);
      const colors = new Values(color).all(10); // Here in all() instead of 10 write 2 and feel the difference in weight in array of an object in console.
      setList(colors);
    }
    catch(error){
      setError(true);
    }
  }
  const size=list.length;
  return (
    <>
      <section className="container">
        <h3>color generator : </h3>
        <form >
          <input className={error && "error"} type="text" id="color" name="color" placeholder="#f15025" value={color} onChange={(e)=>setColor(e.target.value)}/>
          <button type="submit" className="btn" onClick={handleSubmit}>submit</button>
        </form>
      </section>

      <section className="colors">
        {
          list.map((color,index)=>{
            return (
              <SingleColor key={index} {...color} hexColor={color.hex} size={size} index={index}/>
            );
          })
        }
      </section>
    </>
  )
}

export default App

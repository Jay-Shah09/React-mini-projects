import React, { useState } from 'react';
import data from './data';

function App() {
  const [count,setCount] = useState(0);
  const [paras,setParas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCount = parseInt(count);

    if(newCount < 0){
      newCount = 1;
    }
    if(newCount > data.length){
      newCount = data.length;
    }
    setParas(data.slice(0,newCount));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paras">paragraphs : </label>
        <input type="number" id="count" name="count" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button className="btn">generate</button>
      </form>

      <article>
        {
          paras.map((para,index)=>{
            return (
              <p key={index}>{para}</p>
            );
          })
        }
      </article>

    </section>
  )
}

export default App;
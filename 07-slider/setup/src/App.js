import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [persons,setPersons] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = persons.length-1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  },[index,persons]);

  useEffect(()=>{
    const slider = setTimeout(()=>{
      setIndex(index + 1);
    },3000);

    return ()=>{
      clearTimeout(slider);
    }
  },[index]);

    return (
      <section className="section">
        <div className="title">
          <h2><span>/</span>reviews</h2>
        </div>
        <div className="section-center">
          {
            persons.map((person,personIndex)=>{
              let position = "nextSlide";
              if(personIndex === index){
                position = "activeSlide";
              }
              if(personIndex === index-1 || (index===0 && personIndex === persons.length-1)){
                position = "lastSlide";
              }
              return (
                <article className={position}>
                  <img src={person.image} alt={person.name} className="person-img"/>
                  <h4>{person.name}</h4>
                  <p className="title">{person.title}</p>
                  <p className="text">{person.quote}</p>
                  <FaQuoteRight className="icon"/>
                </article>
              );
            })
          }
          <button className="prev" onClick={()=>setIndex(index-1)}><FiChevronLeft/></button>
          <button className="next" onClick={()=>setIndex(index+1)}><FiChevronRight/></button>
        </div>
      </section>
  )
}

export default App;
 
import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {id,name,job,image,text} = people[index];

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      if(newIndex === people.length){
        newIndex = 0;
      }
      return newIndex
    });
  }
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      if(newIndex === -1){
        newIndex = people.length-1;
      }
      return newIndex;
    });
  }
  const randomPerson = () => {
    setIndex((index)=>{
      let randomIndex = Math.floor(Math.random()*people.length);

      if(randomIndex === index){
        randomIndex = index + 1;
      }
      if(randomIndex === people.length){
        randomIndex = 0;
      }
      return randomIndex;
    });
  }

  return (
    <article className="review">

      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
        <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
      </div>
      <button className="random-btn" onClick={randomPerson}>suprise me</button>

    </article>
  )
};

export default Review;

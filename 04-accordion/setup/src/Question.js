import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
  const [btnName,setBtnName] = useState(true);
  const {id,title,info} = props.question;
  
  const clickHandler = () => {
    setBtnName(!btnName);
  }
  return (
    <div className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={clickHandler}>{btnName ? <AiOutlinePlus/> : <AiOutlineMinus/>}</button>
      </header>
      {!btnName && <p>{info}</p>}
    </div>
  )
};

export default Question;

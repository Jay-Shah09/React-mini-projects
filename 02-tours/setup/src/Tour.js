import React, { useState } from 'react';

const Tour = (props) => {
  const {id,image,info,price,name,removeTours} = props;
  const [readMore,setReadMore] = useState(false);
  // const [text,setText] = useState('more');

  const clickHandler = ()=>{
    setReadMore(!readMore);
   /* setText((text)=>{
      if(text === 'more'){
        return 'less';
      }
      else{
        return 'more';
      }
    }); */
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>

      <footer>

      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>

      <p>{readMore ? info : `${info.substring(0,200)}....`}
        <button onClick={clickHandler}>{readMore?'read less':'read more'}</button>
      </p>

      <button className="delete-btn" onClick={()=>removeTours(id)}>not interested</button>

      </footer>
    </article>
  )
};

export default Tour;

import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {
  const {rgb,weight,index,hexColor,size} = props;
  const [msg,setMsg] = useState(false);
  const bgc = rgb.join(",");
  const hex = `#${hexColor}`;

  // Here if we want hex value of rgb then their is one component in the list but we can not access that hex directly from props, we have to segregate it from color object and then we have to pass that hex to SingeColor.
  // Another method is : we have to convert rgb into hex. If we google how to convert rgb into hex then in stackoverflow their is ready made function for this so we just have to copy paste it and this function is named as rgbToHex.
  const hexx = rgbToHex(...rgb);

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setMsg(false);
    },2000);

    return ()=>{
      clearTimeout(timeOut);
    }
  }, [msg]);

  return (
    <article 
    style={{backgroundColor: `rgb(${bgc})`}} 
    className={`color  ${index >= size/2 ? "color-light" : null}`}
    onClick={()=>{
      setMsg(true);
      navigator.clipboard.writeText(hex);
    }} >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {msg && <p>Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor

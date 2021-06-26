import React, { useEffect } from 'react'

const Alert = (props) => {
  const {msg,type,alertSetting,list} = props;

  useEffect(()=>{
      const timeout = setTimeout(()=>{
      alertSetting(false,"","");
    },5000);

    return ()=>{
      clearTimeout(timeout);
    }
  },[list]);
  
  return <h2 className={`alert alert-${type}`}>{msg}</h2>
}

export default Alert

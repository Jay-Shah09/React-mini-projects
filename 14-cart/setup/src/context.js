import React, { useState, useContext, useReducer, useEffect } from 'react'
import data from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:false,
  cart:data,
  amount:0,
  total:0,
} 
const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);

  const fetchData = async() => {
    dispatch({type:"LOADING"})
    const responses = await fetch(url);
    const info = await responses.json();
    dispatch({type:"DISPLAY_ITEMS",data:info});
  }

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM",id:id});
  }
  const removeAll = () => {
    dispatch({type:"REMOVE_ALL"});
  }
  const countIncc = (id) => {
    dispatch({type:"INCREASE",id:id});
  }
  const countDecc = (id) => {
    dispatch({type:"DECREASE",id:id});
  }

  useEffect(()=>{
    fetchData();
  },[])

  useEffect(()=>{
  dispatch({type:"TOTALS"});
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        removeAll,
        countIncc,
        countDecc,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cocktailCards,setCocktailCards] = useState([]);
  const [loading,setLoading] = useState(false);
  const [searchedWord,setSearchedWord] = useState('');

  const fetchData = async() => {
    setLoading(true);
    try{
      const responses = await fetch(`${url}${searchedWord}`);
      const data = await responses.json();
     
      if(data.drinks){
          const newCocktailCards = data.drinks.map((item)=>{
          const { idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass,} = item;
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass};
        });
        setCocktailCards(newCocktailCards);
      }
      else{
        setCocktailCards([]);
      }
      setLoading(false);
    }

    catch(error){
      console.log(error);
      setLoading(false);
    }
  }

useEffect(()=>{
  fetchData();
}, [searchedWord]);
  return (
    <AppContext.Provider value={{
      cocktailCards,
      loading,
      searchedWord,
      setCocktailCards,
      setLoading,
      setSearchedWord,
    }}>{children}</AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

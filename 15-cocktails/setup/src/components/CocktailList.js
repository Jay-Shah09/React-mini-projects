import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktailCards,loading} = useGlobalContext();

  if(loading){
    return <Loading/>
  }
  if(cocktailCards.length < 1){
    return (
      <h2 className="section-title">no cocktails matched your search criteria</h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title"></h2>
      <div className="cocktails-center">
        {
          cocktailCards.map((item,index)=>{
            return <Cocktail key={index} {...item}/>
          })
        }
      </div>
    </section>
  )
}

export default CocktailList

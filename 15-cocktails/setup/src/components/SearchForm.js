import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const refInput = React.useRef(null);
  const {setSearchedWord} = useGlobalContext();
  
  const handleSubmit = () => {
    setSearchedWord(refInput.current.value);
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
        <div className="form-control">
          <label>search your cocktails here</label>
          <input type="text" ref={refInput} onChange={()=>handleSubmit()}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm

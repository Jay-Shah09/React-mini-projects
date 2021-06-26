import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const {loading,setLoading} = useGlobalContext();
  const [cocktail,setCocktail] = React.useState(null);

  const fetchData = async() => {
    setLoading(true);
    try{
      const responses = await fetch(`${url}${id}`);
      const data = await responses.json();
      
      if(data.drinks){
        const {strDrink,strDrinkThumb,strAlcoholic,strCategory,strGlass,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0];
        const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
        const newCocktail = {name:strDrink,image:strDrinkThumb,info:strAlcoholic,category:strCategory,glass:strGlass,instructions:strInstructions,ingredients:ingredients};
        setCocktail(newCocktail);
      }
      else{
        setCocktail(null);
      }
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  React.useEffect(()=>{
    fetchData();
  }, [id]);

  if(loading){
    return <Loading/>
  }
  if(!cocktail){
    return <h2 className="section-center">no cocktail to display</h2>
  }

  const {name,info,instructions,ingredients,glass,image,category} = cocktail;
  return (
   <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">back to home</Link>
      <h2 className="section-title">{name}</h2>

      <div className="drink">

        <img src={image} alt={name}/>

        <div className="drink-info">
            <p><span className="drink-data">name : </span>{name}</p>
            <p><span className="drink-data">categgory : </span>{category}</p>
            <p><span className="drink-data">info : </span>{info}</p>
            <p><span className="drink-data">glass : </span>{glass}</p>
            <p><span className="drink-data">instructions : </span>{instructions}</p>
            <p><span className="drink-data">ingredients : </span>{
              ingredients.map((item,index)=>{
                return (
                item && <span key={index}>{item}</span>
                );
              })
            }</p>
        </div>

      </div>
   </section>
  )
}

export default SingleCocktail

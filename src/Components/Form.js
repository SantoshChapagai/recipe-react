import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Form = ({ submit, change, recipe, removeHandler }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [ingredients, setIngredients] = useState(1)


  useEffect(() => {
    setIsLoading(true);
    axios.get('https://restcountries.com/v3.1/all/')
      .then(res => {
        const sortedData = res.data
          .map(data => data.name.common)
          .sort((a, z) => a.localeCompare(z));
        setData(sortedData);
      })
    setIsLoading(false);
  }, [])
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className='form'>
      <form onSubmit={submit} onChange={change} recipe={recipe} method="post" >
        <h3>Add new recipe</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="country">Recipe is from</label>
        <select name='country'>
          <option>select</option>
          {data && data.map((country) => <option key={country}>{country}</option>)}
        </select>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
        <label htmlFor="image">Image</label>
        <input type="url" id="image" name="image" alt="imagename" />
        <div className='ingredient_holder'>
          <label htmlFor="">Ingredients</label>
          {[...Array(ingredients)].map((_, ingredient) => (
            <div className='quantity' key={ingredient}>
              <div className='ingredients_list'>
                <div>
                  <label htmlFor={`quantity-${ingredient}`}>Quantity</label>
                  <input type="text" name={`quantity-${ingredient}`} id={`quantity-${ingredient}`} />
                </div>
                <div className='ingredient'>
                  <label htmlFor={`ingredient-${ingredient}`}>Ingredient</label>
                  <input type="text" name={`ingredient-${ingredient}`} id={`ingredient-${ingredient}`} required />
                </div>
              </div>
            </div>
          ))}
          <div className='buttons'>
            <button type="submit" id="add" onClick={() => setIngredients(ingredients + 1)}>Add more</button>
            {ingredients > 1 && <button type='button' id="remove" onClick={() => { setIngredients(ingredients - 1); removeHandler() }}>Remove</button>}
          </div>
        </div>
        <label htmlFor='instruction'>Instructions</label>
        <textarea name="instruction" id="instruction" />
        <button type="submit" id="post" value="submit" name="submit" onClick={() => { ingredients && setIngredients(1) }}>Post recipe</button>

      </form>

    </div>
  );
};

export default Form;
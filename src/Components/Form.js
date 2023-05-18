import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import More from "./More"


const Form = ({ submit, change, handleChange }) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://restcountries.com/v3.1/all/')
      .then(res => { setData(res.data.map(data => data.name.common)) })
    setIsLoading(false);
  }, [])
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className='form'>
      <form onSubmit={submit} onChange={change} method="post" >
        <h4>Add new recipe</h4>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="country">recipe is from</label>
        <select name='country'>
          <option>select</option>
          {data && data.map((country, index) => <option key={index}>{country}</option>)}
        </select>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" maxLength={1000} />
        <label htmlFor="image">Image</label>
        <input type="url" id="image" name="image" alt="imagename" />
        <div className='ingredient_holder'>
          <p>Ingredients</p>
          {/* <More ingredients={recipe.ingredients} /> */}
          <div className='ingredients'>
            <div className='quantity'>
              <label htmlFor='quantity'>Quantity</label>
              <input type="text" id="quantity" name="quantity" onChange={handleChange} />
            </div>
            <div className='ingredient'>
              <label htmlFor="ingredient">Ingredient</label>
              <input type="text" id="ingredient" name="ingredient" onChange={handleChange} />
            </div>
          </div>
          <button type="submit" id="add">Add more</button>
        </div>
        <label htmlFor='instruction'>Instructions</label>
        <textarea name="instruction" id="instruction" maxLength={1000} />
        <button type="submit" id="post" value="submit" name="submit">Post recipe</button>

      </form>

    </div>
  );
};

export default Form;
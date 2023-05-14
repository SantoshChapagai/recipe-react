import React from 'react';
import Country from "../Country"
import More from "./More"


const Form = ({ submit, change, recipe }) => {

  return (
    <div className='form'>
      <form onSubmit={submit} onChange={change} recipe={recipe} method="post" >
        <h4>Add new recipe</h4>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" required />
        <label htmlFor="country">recipe is from</label>
        <Country required />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" maxLength={1000} required />
        <label htmlFor="image">Image</label>
        <input type="url" id="image" name="image" alt="imagename" required />
        <div className='ingredient_holder'>
          <p>Ingredients</p>
          <More ingredients={recipe.ingredients} />
          {/* <div className='ingredients'>
            <div className='quantity'>
              <label htmlFor='quantity'>Quantity</label>
              <input type="text" id="quantity" name="quantity" />
            </div>
            <div className='ingredient'>
              <label htmlFor="ingredient">Ingredient</label>
              <input type="text" id="ingredient" name="ingredient" />
            </div>
          </div>
          <button type="submit" id="add">Add more</button> */}
        </div>
        <label htmlFor='instruction'>Instructions</label>
        <textarea name="instruction" id="instruction" maxLength={1000} required />
        <button type="submit" id="post" value="submit" name="submit">Post recipe</button>

      </form>

    </div>
  );
};

export default Form;
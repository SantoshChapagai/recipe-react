import React from 'react';
import Country from "../Country"

const Form = () => {
  return (
    <div className='form'>
      <form>
        <h2>Add new recipe</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="country">recipe is from</label>
        <Country />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" maxLength={1000} />
        <div>
          <div className='ingredients'>
            <p>Ingredients</p>
            <div className='quantity'>
              <label htmlFor='quantity'>Quantity</label>
              <input type="text" id="quantity" name="quantity" />
            </div>
            <div className='ingredient'>
              <label htmlFor="ingredient">Ingredient</label>
              <input type="text" id="ingredient" name="ingredient" />
            </div>
          </div>
          <button type="submit" id="add">Add more</button>
        </div>
        <label htmlFor='instruction'>Instructions</label>
        <textarea name="instruction" id="instruction" maxLength={1000} />
        <button type="submit" id="post">Post recipe</button>

      </form>

    </div>
  );
};

export default Form;
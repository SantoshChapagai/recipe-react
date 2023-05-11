import React from 'react';
import Country from "../Country"

const Form = (click) => {
  return (
    <div className='form'>
      <form>
        <h4>Add new recipe</h4>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="country">recipe is from</label>
        <Country />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" maxLength={1000} />
        <label for="image">Image</label>
        <input type="url" id="image" name="image" alt="imagename" />
        <div className='ingredient_holder'>
          <p>Ingredients</p>
          <div className='ingredients'>
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
        <button type="submit" id="post" onClick={click}>Post recipe</button>

      </form>

    </div>
  );
};

export default Form;
import React from 'react';
import Country from "../Country"

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="country">recipie is from</label>
        <select id="country" name="country">
          <Country />
        </select>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" maxLength={1000} />
        <div>
          <p>Ingredients</p>
          <label htmlFor='quantity'>Quantity</label>
          <input type="text" id="quantity" name="quantity" />
          <label htmlFor="ingredient">Ingredient</label>
          <input type="text" id="ingredient" name="ingredient" />
          <button type="submit" id="add">Add more</button>
        </div>
        <label htmlFor='instruction'>Instructions</label>
        <textarea name="instruction" id="instruction" maxLength={1000} />
        <button type="submit" id="post">Post recipie</button>

      </form>

    </div>
  );
};

export default Form;
import React, { useState } from 'react';
import './styles.css';

const More = () => {
  const [ingredients, setIngredients] = useState([{ quantity: '', ingredient: '' }]);

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { quantity: '', ingredient: '' }]);
  };

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [name]: value };
    setIngredients(newIngredients);
  };

  return (
    <div>
      <form>
        {ingredients.map((ingredient, index) => (
          <div key={index} className='ingredients'>
            <div className='quantity'>
              <label htmlFor={`quantity-${index}`}>Quantity</label>
              <input type="text" id={`quantity-${index}`} name="quantity" value={ingredient.quantity} onChange={(e) => handleIngredientChange(e, index)} />
            </div>
            <div className='ingredient'>
              <label htmlFor={`ingredient-${index}`}>Ingredient</label>
              <input type="text" id={`ingredient-${index}`} name="ingredient" value={ingredient.ingredient} onChange={(e) => handleIngredientChange(e, index)} />
            </div>
          </div>
        ))}
        <div>
          <button type="button" id="add" onClick={addIngredient}>Add more</button>
        </div>
      </form>
    </div>
  );
};

export default More;
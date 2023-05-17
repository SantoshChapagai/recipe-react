import Axios from 'axios';
import React, { useState } from 'react';
import Form from '../Components/Form';


const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    author: '',
    country: '',
    description: '',
    image: '',
    ingredients: [{ quantity: '', ingredient: '' }],
    instruction: ''
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/recipes", recipe)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setRecipe({
      recipe
    });
    e.target.reset();

  }


  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index][name] = value;
    setRecipe({ ...recipe, ingredients });
  };
  const handleAddIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { quantity: '', ingredient: '' }]
    });
  };


  return (
    <div>
      <Form submit={submitHandler} change={changeHandler} handleAddIngredient={handleAddIngredient} recipe={recipe} />
    </div>
  );
};

export default AddRecipe;
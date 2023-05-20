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
    ingredients: [
      {
        quantity: "",
        ingredient: ""
      }
    ],
    instruction: '',
    id: null,
  });


  const recipeHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/recipes", recipe)
      .then(res => {
        console.log(res.data);
        alert("Recipe posted successfully");
        setRecipe(prevRecipe => ({
          ...prevRecipe,
          ingredients: [
            {
              quantity: "",
              ingredient: ""
            }
          ]
        }));
        e.target.reset();
      })
      .catch(error => {
        console.log(error);
      });

  }


  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name.includes('quantity') || name.includes('ingredient')) {
      const [, i] = name.split("-");
      setRecipe((prevRecipe) => {
        const updatedIngredients = [...prevRecipe.ingredients];
        updatedIngredients[i] = {
          ...updatedIngredients[i],
          [name.includes('quantity-') ? "quantity" : "ingredient"]: value
        };
        return { ...prevRecipe, ingredients: updatedIngredients };
      })
    } else {
      setRecipe({ ...recipe, [e.target.name]: e.target.value });

    }
  };

  const ingredientHandler = (ingredients) => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: Array.from({ length: ingredients }, (_, index) => prevRecipe.ingredients[index] || { quantity: '', ingredient: '' })
    }));
  };


  return (
    <div>
      <Form submit={recipeHandler} change={changeHandler} recipe={recipe} ingredientHandler={ingredientHandler} />

    </div>
  );
};

export default AddRecipe;

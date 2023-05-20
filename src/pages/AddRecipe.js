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
        ingredientsReset();
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
      });
    } else {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: value
      }));
    }
  };

  const ingredientsReset = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [
        {
          quantity: '',
          ingredient: '',
        },
      ],
    }));
  };

  return (
    <div>
      <Form submit={recipeHandler} change={changeHandler} recipe={recipe} ingredientsReset={ingredientsReset} />

    </div>
  );
};

export default AddRecipe;

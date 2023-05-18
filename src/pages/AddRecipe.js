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
    ingredients: [],
    instruction: ''
  });

  const [Ingredients, setIngredients] = useState({
    quantity: '',
    ingredient: ''
  })

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

  const changeHandler = (e) => {
    // const { name, value } = e.target;
    setRecipe({ ...recipe, [e.target.name]: e.target.value })
  };
  // const handleAddIngredient = () => {
  //   setRecipe({
  //     ingredients: [...recipe.ingredients, { quantity: '', ingredient: '' }]
  //   });
  // };


  return (
    <div>
      <Form submit={submitHandler} change={changeHandler} />

    </div>
  );
};

export default AddRecipe;
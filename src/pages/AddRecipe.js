import axios from 'axios';
import React, { useState } from 'react';
import Form from '../Components/Form'

const AddRecipe = () => {

  const [details, setDetails] = useState({
    name: '',
    author: '',
    country: '',
    description: '',
    image: '',
    quantity: null,
    ingredient: '',
    instruction: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(" http://localhost:4000/recipes", details)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    setDetails({
      name: '',
      author: '',
      country: '',
      description: '',
      image: '',
      quantity: null,
      ingredient: '',
      instruction: ''
    });
  }

  return (
    <div>
      <Form click={submitHandler} />
    </div>
  );
};

export default AddRecipe;
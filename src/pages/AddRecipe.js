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
    axios.post(' http://localhost:4000/posts', details)
      .then(res => {
        console.log(res.data);
        setDetails({});
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Form click={submitHandler} />
    </div>
  );
};

export default AddRecipe;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from '../Components/Form'

const AddRecipe = () => {


  submitHandler = (e) => {
    e.preventDefault();
    axios.post(' http://localhost:4000/posts')
  }

  return (
    <div>
      <Form click={submitHandler} />
    </div>
  );
};

export default AddRecipe;
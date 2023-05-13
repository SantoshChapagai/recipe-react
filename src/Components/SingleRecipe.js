import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data)
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:4000/recipes/${params.singlerecipe}`)
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [params.singlerecipe]);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Hello</h2>
      <img src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
      <h3>{data.author}</h3>
      <h3>{data.country}</h3>
      <p>{data.description}</p>
      <p>{data.quantity} : <span>{data.ingredient}</span></p>
      <p>{data.instruction}</p>

      <button onClick={() => navigate(-1)}>Go back </button>
    </div>
  );
};

export default SingleRecipe;
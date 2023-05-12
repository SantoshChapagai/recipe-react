import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <img src={data.image} alt={data.name} />
      <button onClick={() => navigate(-1)}>Go back </button>
    </div>
  );
};

export default SingleRecipe;
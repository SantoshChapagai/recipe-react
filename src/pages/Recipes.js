import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UI/Card'

const Recipes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    setIsLoading(true);
    setIsLoading(true);
    axios.get("http://localhost:4000/recipes")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      {data.map((recipe) => (
        <Card key={recipe.id}
          recipe={recipe}
        />
      ))}

    </div>
  );
};

export default Recipes;
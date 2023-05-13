import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UI/Card'


const Recipes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  console.log(data);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:4000/recipes")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }
  const searchFilter = data.filter(recipes => {
    return recipes.name.includes(searchInput)
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <div className='search'>
        <input onChange={searchInputHandler} />
      </div>
      {searchFilter.map((data) => (
        <Card key={data.id}
          recipe={data}
        />
      ))}

    </div>
  );
};

export default Recipes;
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ recipe }) => {

  const [flag, setFlag] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/name/${recipe.country}`)

      .then(res => { setFlag(res.data.map(data => data.flags.svg)) })
    setIsLoading(false);
  }, [recipe.country])

  return (

    <div className='card_container'>
      <img src={flag} alt={recipe.country} />
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <div className='more'>
        <Link to={`/recipes/${recipe.id}`}>See more</Link>
      </div>
    </div >
  );
};

export default Card;
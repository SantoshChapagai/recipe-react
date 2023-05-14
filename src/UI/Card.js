import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ recipe }) => {
  console.log(recipe.name);
  return (

    <div className='card_container'>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <div className='more'>
        <Link to={`/recipes/${recipe.id}`}>See more</Link>

      </div>
    </div >
  );
};

export default Card;
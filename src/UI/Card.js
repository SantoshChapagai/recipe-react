import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ recipe, name }) => {
  return (
    <div className='card_holder'>
      <div className='card_container'>
        <img src={recipe.image} alt={recipe.name} />
        <h4>{recipe.name}</h4>
        <Link to={`/recipes/${recipe.id}`}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
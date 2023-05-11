import React from 'react';
import './card.css'

const Card = ({ recipe }) => {
  return (
    <div className='card_holder'>
      <div className='card'>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </div>
  );
};

export default Card;
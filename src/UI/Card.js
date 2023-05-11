import React from 'react';
import './card.css'

const Card = ({ recipe }) => {
  return (
    <div className='card_holder'>
      <div className='card'>
        <img src={recipe.image} alt={recipe.name} />
        <h4>{recipe.name}</h4>
      </div>
    </div>
  );
};

export default Card;